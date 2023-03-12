import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailer: (state) => {
      state.loading = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      if (state.currentUser.subscribedPeoples.includes(action.payload)) {
        state.currentUser.subscribedPeoples.splice(
          state.currentUser.subscribedPeoples.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currentUser.subscribedPeoples.push(action.payload);
      }
    },
  },
});

export const { loginStart, subscription, loginFailer, loginSuccess, logout } =
  userSlice.actions;

export default userSlice.reducer;

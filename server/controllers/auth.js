import mongoose from "mongoose";
import User from "../models/User.js";
// when ever you call mongodb your function should be async because that will
// take time

export const signup = async (req, res) => {
  console.log(req.body);
  //   try {
  //     const newUser = new User(req.body);
  //   } catch (error) {}
};

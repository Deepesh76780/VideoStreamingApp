import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlEfvDkia6Ja-pPXZp0h0bzXhHVCWCN6U",
  authDomain: "cipertube.firebaseapp.com",
  projectId: "cipertube",
  storageBucket: "cipertube.appspot.com",
  messagingSenderId: "187109078634",
  appId: "1:187109078634:web:aa7b3b98765bef4c5f7c13",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;

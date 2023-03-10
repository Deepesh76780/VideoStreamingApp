import Express from "express";
import {
  update,
  Delete,
  getUser,
  subscribe,
  unSubscribe,
  like,
  disLike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
// import test from "../controllers/user.js";

const router = Express.Router();

// router.get("/test", test);
router.put("/:id", verifyToken, update);
router.delete("/:id", verifyToken, Delete);
router.get("/find/:id", getUser);
router.put("/sub/:id", verifyToken, subscribe);
router.put("/unsub/:id", verifyToken, unSubscribe);
router.put("/like/:videoId", verifyToken, like);
router.put("/dislike/:videoId", verifyToken, disLike);

export default router;

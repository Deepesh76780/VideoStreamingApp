import Express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addComment,
  deleteComment,
  getComment,
} from "../controllers/comment.js";

const router = Express.Router();

router.post("/", verifyToken, addComment);
router.delete("/:id", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComment);

export default router;

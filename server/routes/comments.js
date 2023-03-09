import Express from "express";
import test from "../controllers/comment.js";

const router = Express.Router();

router.get("/test", test);

export default router;

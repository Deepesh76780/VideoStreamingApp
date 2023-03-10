import Express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  random,
  trend,
  addView,
  sub,
} from "../controllers/video.js";

const router = Express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", verifyToken, getVideo);
router.put("/view/:id", verifyToken, addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", sub);

export default router;

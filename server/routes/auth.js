import Express from "express";
import { signup } from "../controllers/auth.js";

const router = Express.Router();

router.post("/signup", signup);
router.post("/signin");
router.post("/google");

export default router;

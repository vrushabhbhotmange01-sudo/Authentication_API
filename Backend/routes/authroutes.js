import express from "express";
import { registerUser,loginUser } from "../controllers/authcontrollers.js";
import { protect,authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;

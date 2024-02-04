import express from "express"
import { registerUser, loginUser } from "../controllers/register.js";

const router = express.Router();

// get route
router.post("/user", registerUser);
router.post("/user", loginUser);



export default router;

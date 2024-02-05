import express from "express"
import { signup, signin } from "../controllers/register.js";

const router = express.Router();

// Register User ( Post route ) =>
router.post("/signup", signup);

// Login User (Post route) =>
router.post("/signin", signin);

export default router;

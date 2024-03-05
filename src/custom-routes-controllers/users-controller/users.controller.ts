import { Router } from "express";
import {
  registerUser,
  loginUser,
  getLoggedInUser,
} from "./user.controller.helpers";
const router = Router();

// Define routes
router.post("/register", registerUser); // Create a new loan
router.delete("/login", loginUser); // Delete a loan by ID
router.put("/logged-in/:id", getLoggedInUser); // Update a loan by ID

export default router;

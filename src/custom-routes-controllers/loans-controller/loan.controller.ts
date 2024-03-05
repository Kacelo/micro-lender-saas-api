import { Router } from "express";
import { createLoan, updateLoan, deleteLoan } from "./loan.controllers.helper";
const router = Router();

// Define routes
router.post("/loans", createLoan); // Create a new loan
router.delete("/loans/:id", deleteLoan); // Delete a loan by ID
router.put("/loans/:id", updateLoan); // Update a loan by ID

export default router;

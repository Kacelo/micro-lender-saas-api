import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  updateTransaction,
} from "./transaction.helpers";
const router = Router();

// Define routes
router.post("/transactions", createTransaction); // Create a new loan
router.delete("/transactions/:id", deleteTransaction); // Delete a loan by ID
router.put("/transactions/:id", updateTransaction); // Update a loan by ID

export default router;

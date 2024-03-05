import { Router } from "express";
import {
  createDocument,
  deleteDocument,
  updateDocument,
} from "./document.controller.helpers";
const router = Router();

// Define routes
router.post("/documents", createDocument); // Create a new loan
router.delete("/documents/:id", deleteDocument); // Delete a loan by ID
router.put("/documents/:id", updateDocument); // Update a loan by ID

export default router;

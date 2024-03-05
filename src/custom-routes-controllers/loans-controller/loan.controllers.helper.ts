import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Loan from "../../models/loan.model";

// READ
// DELETE
// UPDATE
const createLoan = asyncHandler(async (req: Request, res: Response) => {
  const { borrower, lender, amountRequested, status, documents } = req.body;

  // Check if the loan exists
  const loanExists = await Loan.findOne({ borrower, lender, status });
  if (loanExists) {
    res.status(409).json({ message: "A similar loan already exists" });
  }

  // Create the loan
  const loan = await Loan.create({
    borrower,
    lender,
    amountRequested,
    status,
    documents,
  });

  res.status(201).json({ message: "Loan created successfully", loan });
});

// Delete a loan
const deleteLoan = asyncHandler(async (req: Request, res: Response) => {
  const loanID = req.params.id;

  // Find and update the loan
  const updatedLoan = await Loan.findByIdAndUpdate(
    loanID,
    { deleted: true },
    { new: true }
  );

  res.json({ message: "Loan deleted successfully", loan: updatedLoan });
});

// Update a loan
const updateLoan = asyncHandler(async (req: Request, res: Response) => {
  const loanID = req.params.id;

  // Check if the loan exists
  const loan = await Loan.findById(loanID);
  if (!loan) {
    res.status(404).json({ message: "Loan not found" });
  }

  // Update the loan
  await Loan.findByIdAndUpdate(loanID, req.body);

  res.json({ message: "Loan updated successfully" });
});

export { createLoan, deleteLoan, updateLoan };

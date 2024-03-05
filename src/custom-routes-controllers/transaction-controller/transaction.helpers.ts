import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Transaction from "../../models/transaction.model";
const createTransaction = asyncHandler(async (req: Request, res: Response) => {
  const { loan, type, tineStamp, status, amount } = req.body;

  // Check if the loan exists
  const transactionExists = await Transaction.findOne({ loan });
  if (transactionExists) {
    res.status(409).json({ message: "A similar transaction already exists" });
  }

  // Create the loan
  const transaction = await Transaction.create({
    loan,
    type,
    tineStamp,
    status,
    amount,
  });

  res.status(201).json({ message: "Loan created successfully", transaction });
});
const deleteTransaction = asyncHandler(async (req: Request, res: Response) => {
  const transactionID = req.params.id;

  // Find and update the loan
  const updatedLoan = await Transaction.findByIdAndUpdate(
    transactionID,
    { deleted: true },
    { new: true }
  );

  res.json({ message: "Loan deleted successfully", loan: updatedLoan });
});

// Update a loan
const updateTransaction = asyncHandler(async (req: Request, res: Response) => {
  const transactionID = req.params.id;

  // Check if the loan exists
  const loan = await Transaction.findById(transactionID);
  if (!loan) {
    res.status(404).json({ message: "Loan not found" });
  }

  // Update the loan
  await Transaction.findByIdAndUpdate(transactionID, req.body);

  res.json({ message: "Loan updated successfully" });
});
export { createTransaction, updateTransaction, deleteTransaction };

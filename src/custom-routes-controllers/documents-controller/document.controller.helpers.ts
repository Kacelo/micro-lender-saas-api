import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Documents from "../../models/document.model";

const createDocument = asyncHandler(async (req: Request, res: Response) => {
  const { loan, docmuntType, url, timeStamp, _id } = req.body;

  // Check if the loan exists
  const loanExists = await Documents.findOne({ _id });
  if (loanExists) {
    res.status(409).json({ message: "A similar loan already exists" });
  }

  // Create the loan
  const document = await Documents.create({
    loan,
    docmuntType,
    url,
    timeStamp,
  });

  res.status(201).json({ message: "Loan created successfully", loan });
});

// Delete a loan
const deleteDocument = asyncHandler(async (req: Request, res: Response) => {
  const loanID = req.params.id;

  // Find and update the loan
  const updatedLoan = await Documents.findByIdAndUpdate(
    loanID,
    { deleted: true },
    { new: true }
  );

  res.json({ message: "Loan deleted successfully", loan: updatedLoan });
});

// Update a loan
const updateDocument = asyncHandler(async (req: Request, res: Response) => {
  const documentID = req.params.id;

  // Check if the loan exists
  const loan = await Documents.findById(documentID);
  if (!loan) {
    res.status(404).json({ message: "Loan not found" });
  }

  // Update the loan
  await Documents.findByIdAndUpdate(documentID, req.body);

  res.json({ message: "Loan updated successfully" });
});
export { createDocument, deleteDocument, updateDocument };

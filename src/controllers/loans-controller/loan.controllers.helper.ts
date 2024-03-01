import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Loan from "../../models/loan.model";

const createLoan = asyncHandler(async (req: Request, res: Response) => {
  const { _id, borrower, lender, amountRequested, status, documents } =
    req.body;
  //   1. check if the loan exists
  const loanExists = await Loan.findOne({ _id });
  if (loanExists) {
    res.status(409).json({ message: "The loan already exists" });
  }
  const loan = await Loan.create({
    borrower,
    lender,
    amountRequested,
    status,
    documents,
  });
  res.json({ message: "Loan saved successfully", loan });
});
// READ
// DELETE
// UPDATE

export { createLoan };

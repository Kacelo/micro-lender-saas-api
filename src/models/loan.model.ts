import mongoose, { Document, Schema, model } from "mongoose";

interface ILoan extends Document {
  borrower: mongoose.Types.ObjectId;
  lender: mongoose.Types.ObjectId;
  amountRequested: number;
  status: string;
  documents: mongoose.Types.ObjectId[]; // Assuming documents are stored as references
}

const loanSchema = new Schema<ILoan>({
  borrower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amountRequested: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], required: true },
  documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }] // Assuming documents are stored as references
});

const Loan = model<ILoan>("Loan", loanSchema);

export default Loan;

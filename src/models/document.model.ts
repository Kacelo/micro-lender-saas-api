// Loan (reference to Loan)
// Document type
// File path or reference
// Timestamp

import mongoose, { Document, Schema, model } from "mongoose";

interface IDocument extends Document {
  loan: mongoose.Types.ObjectId;
  documentType: string;
  url: string;
  timeStamp: Date;
  documents: mongoose.Types.ObjectId[]; // Assuming documents are stored as references
}

const loanDocument = new Schema<IDocument>({
  loan: { type: Schema.Types.ObjectId, ref: 'Loan', required: true },
  documentType: { type: String, required: true },
  url: { type: String, required: true, },
  timeStamp: { type: Date, default: Date.now },
});

const Loan = model<IDocument>("Document", loanDocument);

export default Loan;
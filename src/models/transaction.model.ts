import mongoose, { Document, Schema, model } from "mongoose";
import moment from "moment";
interface ITransactions extends Document {
  loan: mongoose.Types.ObjectId;
  type: string;
  timeStamp: Date;
  status: string;
  amount: string; // Assuming documents are stored as references
}

const loanTransaction = new Schema<ITransactions>({
  loan: { type: Schema.Types.ObjectId, ref: "Loan", required: true },
  type: { type: String, enum: ["repayment", "disbursement"], required: true },
  timeStamp: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    required: true,
  },
  amount: { type: String, required: true }, // Assuming documents are stored as references
});
const Transaction = model<ITransactions>("Transaction", loanTransaction);

export default Transaction;

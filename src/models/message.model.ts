// Sender (reference to User)
// Receiver (reference to User)
// Content
// Timestamp

import mongoose, { Document, Schema, model } from "mongoose";

interface IMessage extends Document {
  sender: mongoose.Types.ObjectId;
  receiver: mongoose.Types.ObjectId;
  content: string;
  timeStamp: Date;
}

const messageSchema = new Schema<IMessage>({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
});

const Message = model<IMessage>("Message", messageSchema);

export default Message;
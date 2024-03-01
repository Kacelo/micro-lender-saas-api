import mongoose from "mongoose";

 const databaseConnection = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://vernonkachelo:admin@linkedlistapp.vrbko4q.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
};

export default databaseConnection;
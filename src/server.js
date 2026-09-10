import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routs.js";
dotenv.config();
// console.log("JWT_SECRET loaded:",  process.env.PORT ? "✅ Yes" : "❌ No");
const app = express();
const PORT = 5000;
// const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use('/api/auth', authRouter);
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map
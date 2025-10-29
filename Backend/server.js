import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import cors from "cors";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.json({message:"working"})
})
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
})


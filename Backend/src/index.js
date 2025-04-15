import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import messageRoute from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";



dotenv.config();


const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true, 
}))

const PORT = process.env.PORT;

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
    connectDB();

})  
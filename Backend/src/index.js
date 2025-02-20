import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

dotenv.config();


const app = express()
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/auth", authRoute);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
    connectDB();

})  
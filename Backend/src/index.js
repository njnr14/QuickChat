import express from "express";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";
import messageRoute from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {io , server,app} from "./lib/socket.js"
import path from "path";

dotenv.config();



app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true, 
}))

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);


app.get('/', (req, res) => res.send('Hello World!'))

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname , "../Frontend/dist")));
    app.get("*" , (req,res)=>{
        res.sendFile(path.join(__dirname , "../Frontend" , "dist" , "index.html"))
    })
}

server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
    connectDB();
})  
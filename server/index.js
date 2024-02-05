import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// routes =>
import authUser from "./routes/register.js";
dotenv.config();
// express app => 
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // replace with your allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // allow sending cookies
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());




// mongodb connected ==> 
const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connecting .....")
  } catch (error) {
    console.log("mongo disconnected -> ")
  }
}
mongoConnect();


// Authentication routes =>
app.use("/user", authUser)



// server is live on =>
app.listen(process.env.PORT || 3001, async () => {
  try {
    console.log(`server is running on ---> ${process.env.PORT || 8080}`)
  } catch (error) {
    console.log("server disconnected --> ", error);
  }
})
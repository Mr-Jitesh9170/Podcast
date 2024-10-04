require("dotenv").config();
const express = require("express")
const cors = require("cors")
const { mongoConnect } = require("./config/db.js")
const { verifyToken } = require("./middleware/jwtAuth.js")

const app = express();

// middleware =>
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(require("./routes/authRoutes.js"))
app.use(verifyToken);

// db connected =>
mongoConnect();

// routes =>

 
app.listen(process.env.PORT, () => {
  console.log(`server is running on -> ${process.env.PORT}`)
})
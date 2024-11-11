require("dotenv").config();
const express = require("express")
const cors = require("cors")
const { mongoConnect } = require("./config/db.js")
const { verifyToken } = require("./middleware/jwtAuth.js")
const app = express();


// middleware =>
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/authRoutes.js"));

// db connected => 
mongoConnect();

// routes => 
app.use(require("./routes/podcasteRoutes.js"));
app.use(verifyToken);
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on -> ${process.env.PORT}`)
})
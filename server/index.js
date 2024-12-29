require("dotenv").config();
const express = require("express")
const cors = require("cors")
const { mongoConnect } = require("./config/db.js")
const { verifyToken } = require("./middleware/jwtAuth.js")
const cookieParser = require('cookie-parser')

const app = express();


// middleware =>
app.use(cookieParser())
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true
  }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('media'));


// db connected => 
mongoConnect();

app.use(require("./routes/authRoutes.js"));
app.use(verifyToken);

//secured routes => 
app.use(require("./routes/podcasteRoutes.js"));
app.use(require("./routes/profileRoutes.js"))

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on -> ${process.env.PORT}`)
})
require("dotenv").config();
const express = require("express")
const cors = require("cors")
const { mongoConnect } = require("./config/db.js")
const { verifyToken } = require("./middleware/jwtAuth.js")
const app = express();


class Podcast {
 

  hello = () => {
    console.log("hello world")
  }

}

const hello = new Podcast();

console.log(hello.hello())


// middleware =>
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./routes/authRoutes.js"));
app.use(verifyToken);

// db connected => 
mongoConnect();

// routes => 
app.use(require("./routes/podcasteRoutes.js"));

app.listen(process.env.PORT, () => {
  console.log(`server is running on -> ${process.env.PORT}`)
})
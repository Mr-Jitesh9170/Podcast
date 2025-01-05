require("dotenv").config();
const express = require("express")
const { mongoConnect } = require("./config/db.js")
const { verifyToken } = require("./middleware/jwtAuth.js")
const cookieParser = require('cookie-parser')
const helmet = require("helmet")
const app = express();
const morgan = require("morgan");

app.use(helmet());

const cors = require("cors");
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
};
app.options("*", cors(corsOptions))
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/media', (req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/media', express.static('media'));

mongoConnect();

app.use(require("./routes/authRoutes.js"));
app.use(verifyToken);
app.use(require("./routes/podcasteRoutes.js"));
app.use(require("./routes/profileRoutes.js"))

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on -> ${process.env.PORT}`)
})
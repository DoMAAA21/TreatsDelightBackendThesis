const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const auth = require("./routes/auth");


const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(cookieParser());
app.use("/api/v1", auth);


app.use(errorMiddleware);

module.exports = app;
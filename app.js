const express = require("express");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const auth = require("./routes/auth");
const store = require("./routes/store");
const product = require("./routes/product");
const employee = require("./routes/employee");
const order = require("./routes/order");
const chart = require("./routes/chart");
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
app.use("/api/v1", store);
app.use("/api/v1", product);
app.use("/api/v1", employee);
app.use("/api/v1", order);
app.use("/api/v1", chart);

app.use(errorMiddleware);

module.exports = app;
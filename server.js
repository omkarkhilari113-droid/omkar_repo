const express = require("express");
const app = express();
const db = require("./db");
const port = 3000;

const userRoutes = require("./routes/user.routes.js");


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// log request URL
app.use("/", (req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next(); // move to next middleware
});

app.use("/user", userRoutes);//using the routes in index.js

module.exports = app;

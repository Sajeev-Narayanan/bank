require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bankRouter = require("./routers/bankRouter");
app.use(express.json());
dotenv.config();
app.use("/", bankRouter);
const connectDb = require("./config/mongoConfig");
connectDb();
app.listen(3000, console.log("listening"));
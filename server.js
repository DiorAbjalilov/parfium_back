const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Env variables
dotenv.config();

// Connecting to database
connectDB();

// connect exstations
const app = express();
app.use(express.json());
app.use(cors());

// api connect
// app.use("/api", require("./routers/routerController"));

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(` ========= * Success fuly * ========
 Listening on port ==> ${PORT}...`)
);

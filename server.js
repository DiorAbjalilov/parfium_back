const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// connect exstations
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

// api connect
app.use("/api", require("./routers/routerController"));

// PORT
const PORT = process.env.PORT | 5001;
app.listen(PORT, () =>
  console.log(` ========= * Success fuly * ========
 Listening on port ==> ${PORT}...`)
);

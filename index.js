const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const users = require("./users");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

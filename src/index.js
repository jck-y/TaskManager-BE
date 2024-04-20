const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const users = require("../users");
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
const taskController = require("./task/task.controller");
app.use("/task", taskController);

app.listen(port,() => 
    console.log(`Server running at http://localhost:${port}`)
);

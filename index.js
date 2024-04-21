const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const task = require("./task");
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

//get all task
app.get("/task", (req, res) => {
  res.json({
    status: "success",
    message: "Get All Task",
    data: task,
  });
});

//get task by id
app.get("/task/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = task.find((task) => task.id === parseInt(id));
  if (!result) {
    return res.status(404).send("Task not found");
  }
  res.json({
    status: "success",
    message: `Get Task By ID: ${id}`,
    data: result,
  });
});

//get task by category

app.get("/task/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const result = task.filter(
    (task) => task.task_category.toLowerCase() === category
  );
  if (result.length === 0) {
    return res.status(404).send("No Tasks found in this category");
  }
  res.json({
    status: "success",
    message: `Get Task By Category: ${category}`,
    data: result,
  });
});

//get task by checklist
app.get("/task/checklist/:value", (req, res) => {
  const value = req.params.value;
  if (value !== "true" && value !== "false") {
    return res.status(400).json({
      status: "error",
      message: "Invalid checklist value. Please use true or false",
    });
  }
  const result = task.filter((task) => String(task.checklist) === value);
  if (result.length === 0) {
    return res.status(404).send(`No task found with value: ${value}`);
  }
  res.json({
    status: "success",
    message: `Get task by Checklist: ${value}`,
    data: result,
  });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createTask, deleteTask, getAllTasks } = require("./task.service");

router.post("/", async (req, res) => {
  const newTask = req.body;
  try {
    const insertTask = await createTask(newTask);
    console.log(insertTask);
    res.status(200).json({
      status: "success",
      message: "Task telah dibuat",
      data: insertTask,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Task tidak dapat dibuat karena error",
    });
  }
});

//get all task
router.get("/", async (req, res) => {
  try {
    const result = await getAllTasks();
    console.log(result);
    res.status(200).json({
      status: "succes",
      message: "Get all tasks",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    await deleteTask(taskId);
    res.status(200).json({
      status: "success",
      message: `Task dengan ID ${taskId} telah dihapus`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Task tidak dapat dihapus",
    });
  }
});

module.exports = router;

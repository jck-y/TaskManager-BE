const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskByTitle,
  getTaskByCategory,
  getTaskByComplete,
  updateTask,
} = require("./task.service");

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
router.put("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTaskData = req.body;

  try {
    const updatedTask = await updateTask(taskId, updatedTaskData);
    res.status(200).json({
      status: "success",
      message: `Task dengan ID ${taskId} telah berhasil diupdate`,
      data: updatedTask,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengupdate task",
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

//get task by title
router.get("/title/:title", async (req, res) => {
  const taskTitle = req.params.title;
  try {
    const result = await getTaskByTitle(taskTitle);

    if (result) {
      res.status(200).json({
        status: `success`,
        message: `Get task with Title: ${taskTitle}`,
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Task with Title: ${taskTitle} not found`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: `error`,
      message: `Internal server error`,
    });
  }
});

//get task by complete
router.get("/completed/:completed", async (req, res) => {
  const taskComplete = req.params.completed === 'true';
  try {
    const result = await getTaskByComplete(taskComplete);
    if (result.length > 0) {
      res.status(200).json({
        status: `success`,
        message: `Get task with Complete: ${taskComplete}`,
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Task with Complete: ${taskComplete} not found`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: `error`,
      message: `Internal server error`,
    });
  }
});

//get task by category
router.get("/category/:category", async (req, res) => {
  const taskCategory = req.params.category;
  try {
    const result = await getTaskByCategory(taskCategory);
    if (result.length > 0) {
      res.status(200).json({
        status: `success`,
        message: `Get task with Category: ${taskCategory}`,
        data: result,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Task with Category: ${taskCategory} not found`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: `error`,
      message: `Internal server error`,
    });
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

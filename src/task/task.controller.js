const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createTask, deleteTask, updateTask } = require("./task.service");

router.post("", async (req, res) => {
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

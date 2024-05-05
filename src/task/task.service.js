const prisma = require("../db");

const { insertTask, removeTask, updateTask: updateTaskService } = require("./task.repository");
const createTask = async (newTask) => {
  const Tasks = await insertTask(newTask);
  return Tasks;
};

const updateTask = async (taskId, updatedTaskData) => {
  const updatedTask = await updateTaskService(taskId, updatedTaskData);
  return updatedTask;
};

const deleteTask = async (taskId) => {
  await removeTask(taskId);
};

module.exports = {
  createTask,
  deleteTask,
  updateTask,
};

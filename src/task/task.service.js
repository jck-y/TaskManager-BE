const prisma = require("../db");
const { insertTask, removeTask } = require("./task.repository");
const createTask = async (newTask) => {
  const Tasks = await insertTask(newTask);
  return Tasks;
};
const deleteTask = async (taskId) => {
  await removeTask(taskId);
};
module.exports = {
  createTask,
  deleteTask,
};

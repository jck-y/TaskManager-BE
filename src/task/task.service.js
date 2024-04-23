const prisma = require("../db");

const { insertTask, removeTask, findTask } = require("./task.repository");
const createTask = async (newTask) => {
  const Tasks = await insertTask(newTask);
  return Tasks;
};

const getAllTasks = async () => {
  const tasks = await findTask();
  return tasks;
};

const deleteTask = async (taskId) => {
  await removeTask(taskId);
};
module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
};


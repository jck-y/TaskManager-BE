const prisma = require("../db");

const {
  insertTask,
  removeTask,
  findTask,
  findTaskTitle,
  findTaskCategory,
} = require("./task.repository");
const createTask = async (newTask) => {
  const Tasks = await insertTask(newTask);
  return Tasks;
};

const getAllTasks = async () => {
  const tasks = await findTask();
  return tasks;
};

const getTaskByTitle = async (title) => {
  const tasks = await findTaskTitle(title);
  return tasks;
};

const getTaskByCategory = async (categoryId) => {
  const tasks = await findTaskCategory(categoryId);
  return tasks;
};

const deleteTask = async (taskId) => {
  await removeTask(taskId);
};
module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskByTitle,
  getTaskByCategory,
};

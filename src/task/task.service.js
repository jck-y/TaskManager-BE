const prisma = require("../db");
const {
    insertTask,
  } = require("./task.repository");
  const createTask = async (newTask) => {
    const Task = await insertTask(newTask);
    return Task;
};
module.exports = {
    createTask,
  };
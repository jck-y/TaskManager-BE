const prisma = require("../db");
const {
    insertTask,
  } = require("./task.repository");
  const createTask = async (newTask) => {
    const Tasks = await insertTask(newTask);
    return Tasks;
};
module.exports = {
    createTask,
  };
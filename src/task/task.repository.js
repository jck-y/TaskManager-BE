const prisma = require("../db/index.js");
const insertTask = async (newTask) => {
  const Tasks = await prisma.Task.create({
    data: {
      userId: newTask.userId,
      title: newTask.title,
      description: newTask.description,
      dueDate: new Date(newTask.dueDate),
      completed: newTask.completed,
      categoryId: newTask.categoryId,
    },
  });
  return Tasks;
};

const updateTask = async (taskId, updatedTaskData) => {
  const updatedTask = await prisma.Task.update({
    where: {
      id: taskId,
    },
    data: updatedTaskData,
  });
  return updatedTask;
};


const removeTask = async (taskId) => {
  await prisma.Task.delete({
    where: {
      id: taskId,
    },
  });
};
module.exports = {
  insertTask,
  removeTask,
  updateTask,
};

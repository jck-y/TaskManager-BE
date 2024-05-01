const prisma = require("../db/index.js");

const findTask = async () => {
  const tasks = await prisma.Task.findMany();
  return tasks;
};

const findTaskTitle = async (title) => {
  const tasks = await prisma.Task.findFirst({
    where: {
      title: {
        contains: title,
        mode: "insensitive",
      },
    },
  });
  return tasks;
};

const findTaskCategory = async (categoryId) => {
  const tasks = await prisma.Task.findMany({
    where: {
      categoryId: parseInt(categoryId),
    },
  });
  return tasks;
};

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
  findTask,
  findTaskTitle,
  findTaskCategory,
};

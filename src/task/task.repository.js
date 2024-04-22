const prisma = require("../db/index.js");
const insertTask= async(newTask) =>{
    const Tasks = await prisma.Task.create({
        data: {
          userId: newTask.userId,
          title: newTask.title,
          description: newTask.description,
          dueDate: new Date (newTask.dueDate),
          completed: newTask.completed,
          categoryId: newTask.categoryId,
        },
       })
       return Tasks;
};
module.exports={
    insertTask,
}
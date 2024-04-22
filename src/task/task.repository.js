const prisma = require("../db/index.js");
const insertTask= async(newTask) =>{
    const Task = await prisma.TaskToDo.create({
        data: {
          date: new Date(newTask.date),
          taskName: newTask.taskName,
          taskCategory: newTask.taskCategory,
          taskDescription: newTask.taskDescription,
          checklist: newTask.checklist,
        },
       })
       return Task;
};
module.exports={
    insertTask,
}
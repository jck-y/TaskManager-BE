const prisma = require("../db/index.js");
const insertCategory= async(newCategory) =>{
    const Categorys = await prisma.Category.create({
        data: {
          name: newCategory.name,
          description: newCategory.description,
        },
       })
       return Categorys;
};
module.exports={
    insertCategory,
}
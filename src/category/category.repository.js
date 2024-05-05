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

const updateCategory = async (categoryId, updatedCategoryData) => {
  const updatedCategory = await prisma.Category.update({
    where: {
      id: categoryId,
    },
    data: updatedCategoryData,
  });
  return updatedCategory;
};

module.exports={
    insertCategory,
    updateCategory,
}
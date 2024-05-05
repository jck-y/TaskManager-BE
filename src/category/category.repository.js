const prisma = require("../db/index.js");
const updateCategory = async (categoryId, updatedCategoryData) => {
  const updatedCategory = await prisma.Category.update({
    where: {
      id: categoryId,
    },
    data: updatedCategoryData,
  });
  return updatedCategory;
};
const findCategory = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

const insertCategory = async (newCategory) => {
  const Categorys = await prisma.Category.create({
    data: {
      name: newCategory.name,
      description: newCategory.description,
    },
  });
  return Categorys;
};

// find category by name
const findCategoryByName = async (name) => {
  const category = await prisma.category.findMany({
    where: {
      name: name,
    },
  });
  return category;
};

const deleteCategory = async (categoryId) => {
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
};

module.exports = {
  insertCategory,
  findCategory,
  findCategoryByName,
  updateCategory,
  deleteCategory,
};

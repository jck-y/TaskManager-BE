const prisma = require("../db");
const {
    insertCategory, updateCategory: updateCategoryService,
  } = require("./category.repository");
  const createCategory = async (newCategory) => {
    const Categorys = await insertCategory(newCategory);
    return Categorys;
};

const updateCategory = async (categoryId, updatedCategoryData) => {
  const updatedCategory = await updateCategoryService(categoryId, updatedCategoryData);
  return updatedCategory;
};

module.exports = {
    createCategory, updateCategory,
  };
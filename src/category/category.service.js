const prisma = require("../db");
const {
  insertCategory,
  findCategory,
  findCategoryByName,
  updateCategory: updateCategoryService,
  deleteCategory: deleteCategoryService,
} = require("./category.repository");
const updateCategory = async (categoryId, updatedCategoryData) => {
  const updatedCategory = await updateCategoryService(
    categoryId,
    updatedCategoryData
  );
  return updatedCategory;
};
const getAllCategories = async () => {
  const category = await findCategory();
  return category;
};

const createCategory = async (newCategory) => {
  const Categorys = await insertCategory(newCategory);
  return Categorys;
};

const getCategoryByName = async (name) => {
  const category = await findCategoryByName(name);
  return category;
};

const deleteCategory = async (categoryId) => {
  await deleteCategoryService(categoryId);
};
module.exports = {
  createCategory,
  getAllCategories,
  getCategoryByName,
  updateCategory,
  deleteCategory,
};

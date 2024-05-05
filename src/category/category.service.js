const prisma = require("../db");
const { insertCategory, findCategory, findCategoryByName } = require("./category.repository");

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

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryByName,
};

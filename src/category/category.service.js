const prisma = require("../db");
const { insertCategory, findCategory } = require("./category.repository");

const getAllCategories = async () => {
  const category = await findCategory();
  return category;
};

const createCategory = async (newCategory) => {
  const Categorys = await insertCategory(newCategory);
  return Categorys;
};
module.exports = {
  createCategory,
  getAllCategories,
};

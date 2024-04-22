const prisma = require("../db");
const {
    insertCategory,
  } = require("./category.repository");
  const createCategory = async (newCategory) => {
    const Categorys = await insertCategory(newCategory);
    return Categorys;
};
module.exports = {
    createCategory,
  };
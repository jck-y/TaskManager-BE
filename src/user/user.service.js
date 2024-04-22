const prisma = require("../db");
const { insertUser, removeUser } = require("./user.repository");
const createUser = async (newUser) => {
  const Users = await insertUser(newUser);
  return Users;
};
const deleteUser = async (userId) => {
  await removeUser(userId);
};
module.exports = {
  createUser,
  deleteUser,
};

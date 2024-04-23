const prisma = require("../db");
const { insertUser, removeUser,findUserById } = require("./user.repository");

const createUser = async (newUser) => {
  const Users = await insertUser(newUser);
  return Users;
};

const getUserById = async (id) => {
    const user = await findUserById(id);

    if (!user) {
      throw new Error("User not found");
    }
    return user;
};
const deleteUser = async (userId) => {
  await removeUser(userId);
};
module.exports = {
  createUser,
  deleteUser,
  getUserById,
};

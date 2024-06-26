const prisma = require("../db");
const {
  insertUser,
  removeUser,
  findUserById,
  findUser,
  updateUser : updateUserService,
} = require("./user.repository");

const createUser = async (newUser) => {
  const user = await insertUser(newUser);
  return user;
};

const getAllUser = async () => {
  const users = await findUser();
  return users;
};

const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const updateUser = async (userId, updatedUserData) => {
  const updatedUser = await updateUserService(userId, updatedUserData);
  return updatedUser;
};

const deleteUser = async (userId) => {
  await removeUser(userId);
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getAllUser,
  updateUser,
};

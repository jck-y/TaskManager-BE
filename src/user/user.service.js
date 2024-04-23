const prisma = require("../db");

const { insertUser, findUser } = require("./user.repository");

const getAllUser = async () => {
  const users = await findUser();
  return users;
};

const createUser = async (newUser) => {
  const Users = await insertUser(newUser);
  return Users;
};

const getUserById = async (id) => {
  const user = await prisma.User.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return user;
};

module.exports = {
  createUser,
  getUserById,
  getAllUser,
};

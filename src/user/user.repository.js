const prisma = require("../db/index.js");

const findUser = async () => {
  const user = await prisma.user.findMany();
  return user;
};

const insertUser = async (newUser) => {
  const Users = await prisma.User.create({
    data: {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    },
  });
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
  insertUser,
  getUserById,
  findUser,
};

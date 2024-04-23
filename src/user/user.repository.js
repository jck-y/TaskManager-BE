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


const findUserById = async (id) => {
  const user = await prisma.User.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return user;
};

const removeUser = async (userId) => {
  await prisma.User.delete({
    where: {
      id: userId,
    },
  });
};
module.exports = {
  insertUser,
  removeUser,
  findUserById,
  findUser,
};

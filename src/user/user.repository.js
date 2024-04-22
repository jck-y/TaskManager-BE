const prisma = require("../db/index.js");
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
};

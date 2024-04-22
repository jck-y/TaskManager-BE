const prisma = require("../db");

const {
    insertUser,
  } = require("./user.repository");


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
  };
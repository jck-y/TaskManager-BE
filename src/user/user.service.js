const prisma = require("../db");

const {
    insertUser,
    findUserById,
  } = require("./user.repository");


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

module.exports = {
    createUser,
    getUserById,
  };
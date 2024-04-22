const prisma = require("../db");

const {
    insertUser, updateUser: updateUserService
  } = require("./user.repository");


const createUser = async (newUser) => {
    const Users = await insertUser(newUser);
    return Users;
};

const updateUser = async (userId, updatedUserData) => {
    const updatedUser = await updateUserService(userId, updatedUserData);
    return updatedUser;
};

module.exports = {
    createUser,
    updateUser,
  };
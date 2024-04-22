const prisma = require("../db");
const {
    insertUser,
  } = require("./user.repository");
  const createUser = async (newUser) => {
    const Users = await insertUser(newUser);
    return Users;
};
module.exports = {
    createUser,
  };
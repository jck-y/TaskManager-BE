const prisma = require("../db/index.js");


const insertUser= async(newUser) =>{
    const Users = await prisma.User.create({
        data: {
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
        },
       })
       return Users;
};

const updateUser = async (userId, updatedUserData) => {
    const updatedUser = await prisma.User.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });
    return updatedUser;
};


module.exports={
    insertUser,
    updateUser,
}
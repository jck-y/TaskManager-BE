const express = require ('express');
const prisma = require("../db/index.js");

const router = express.Router();
const {
    createUser,
  } = require("./user.service");
  router.post("", async (req, res) => {
    const newUser = req.body;
    try {
        const insertUser= await createUser(newUser);
        console.log(insertUser);
        res.status(200).json({
            status: "success",
            message: "User telah dibuat",
            data: insertUser,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "error",
        message: "User tidak dapat dibuat karena error",
    });
    }
  });
  module.exports = router;

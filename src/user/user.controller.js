const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();

const { createUser, getUserById, getAllUser } = require("./user.service");

//get all users
router.get("/", async (req, res) => {
  try {
    const result = await getAllUser();
    console.log("result");
    res.status(200).json({
      status: "success",
      message: "Get all users",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("", async (req, res) => {
  const newUser = req.body;
  try {
    const insertUser = await createUser(newUser);
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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await getUserById(id);
    console.log(user);
    res.status(200).json({
      status: "success",
      message: "User ditemukan",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "User tidak ditemukan karena error",
    });
  }
});

module.exports = router;

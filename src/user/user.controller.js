const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();

const { createUser, updateUser, deleteUser } = require("./user.service");

router.delete("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  try {
    await deleteUser(userId);
    res.status(200).json({
      status: "success",
      message: `User dengan ID ${userId} telah dihapus.`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "User tidak dapat dihapus",
    });
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
            message: "User ditemukan atau tidak ditemukan jadi insert user dulu",
            data: user,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "error",
        message: "User tidak ditemukan karena error",
        
router.put("/:id", async (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUserData = req.body;

  try {
    const updatedUser = await updateUser(userId, updatedUserData);
    res.status(200).json({
      status: "success",
      message: `User dengan ID ${userId} telah berhasil diupdate`,
      data: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengupdate user",
    });
  }
});

module.exports = router;

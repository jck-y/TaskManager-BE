const express = require ('express');
const prisma = require("../db/index.js");

const router = express.Router();
const {
    createCategory,
  } = require("./category.service.js");
  router.post("", async (req, res) => {
    const newCategory = req.body;
    try {
        const insertCategory= await createCategory(newCategory);
        console.log(insertCategory);
        res.status(200).json({
            status: "success",
            message: "Category telah dibuat",
            data: insertCategory,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "error",
        message: "Category tidak dapat dibuat karena error",
    });
    }
  });
  module.exports = router;

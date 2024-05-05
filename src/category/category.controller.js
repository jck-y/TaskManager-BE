const express = require ('express');
const prisma = require("../db/index.js");

const router = express.Router();
const {
    createCategory, updateCategory,
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

  router.put("/:id", async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const updatedCategoryData = req.body;
  
    try {
      const updatedCategory = await updateCategory(categoryId, updatedCategoryData);
      res.status(200).json({
        status: "success",
        message: `Category dengan ID ${categoryId} telah berhasil diupdate`,
        data: updatedCategory,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan saat mengupdate category",
      });
    }
  });

  module.exports = router;

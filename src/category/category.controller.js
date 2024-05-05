const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createCategory, getAllCategories, getCategoryByName,updateCategory } = require("./category.service.js");
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

//get all categories
router.get("/", async (req, res) => {
  try {
    const result = await getAllCategories();
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "Get all categories",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const newCategory = req.body;
  try {
    const insertCategory = await createCategory(newCategory);
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
z
    });
  }
});

router.get("/:name", async (req, res) => {
  try {
    const result = await getCategoryByName(req.params.name);
    if (!result) {
      return res.status(404).json({
        status: "error",
        message: "Category tidak ditemukan",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Get category by name",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
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

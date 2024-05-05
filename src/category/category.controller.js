const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createCategory, getAllCategories, getCategoryByName } = require("./category.service.js");

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


module.exports = router;

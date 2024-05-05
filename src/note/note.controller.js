const express = require ('express');
const prisma = require("../db/index.js");

const router = express.Router();
const {
    createNote,
  } = require("./note.service.js");
  router.post("", async (req, res) => {
    const newNote = req.body;
    try {
        const insertNote= await createNote(newNote);
        console.log(insertNote);
        res.status(200).json({
            status: "success",
            message: "Note telah dibuat",
            data: insertNote,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "error",
        message: "Note tidak dapat dibuat karena error",
    });
    }
  });
  module.exports = router;

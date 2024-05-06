const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createNote, deleteNote, findNoteById, findAllNotes, updateNote, } = require("./note.service.js");

router.get("", async (req, res) => {
  try {
    const result = await findAllNotes();
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "Get all notes",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan catatan",
    });
  }
});

router.get("/:id", async (req, res) => {
  const noteId = parseInt(req.params.id);
  try {
    const note = await findNoteById(noteId);
    res.status(200).json({
      status: "success",
      message: `Catatan dengan ID ${noteId}`,
      data: note,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Catatan tidak dapat ditemukan",
    });
  }
});

router.post("", async (req, res) => {
  const newNote = req.body;
  try {
    const insertNote = await createNote(newNote);
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

router.put("/:id", async (req, res) => {
  const noteId = parseInt(req.params.id);
  const updatedNoteData = req.body;

  try {
    const updatedNote = await updateNote(noteId, updatedNoteData);
    res.status(200).json({
      status: "success",
      message: `Note dengan ID ${noteId} telah berhasil diupdate`,
      data: updatedNote,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengupdate note",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const noteId = parseInt(req.params.id);
  try {
    await deleteNote(noteId);
    res.status(200).json({
      status: "success",
      message: `Catatan telah dihapus`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Catatan tidak dapat dihapus",
    });
  }
});
module.exports = router;

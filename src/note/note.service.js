const prisma = require("../db");
const {
  insertNote,
  getNoteById,
  getAllNotes,
  deleteNote: deleteNoteService,
} = require("./note.repository");

const findAllNotes = async () => {
  const notes = await getAllNotes();
  return notes;
};

const findNoteById = async (noteId) => {
  const note = await getNoteById(noteId);
  return note;
};
const createNote = async (newNote) => {
  const Notes = await insertNote(newNote);
  return Notes;
};
const deleteNote = async (noteId) => {
  await deleteNoteService(noteId);
};
module.exports = {
  createNote,
  deleteNote,
  findNoteById,
  findAllNotes,
};

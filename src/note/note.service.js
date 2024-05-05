const prisma = require("../db");
const {
  insertNote,
  deleteNote: deleteNoteService,
} = require("./note.repository");
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
};

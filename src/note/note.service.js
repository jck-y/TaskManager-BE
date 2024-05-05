const prisma = require("../db");
const {
    insertNote,
  } = require("./note.repository");
  const createNote = async (newNote) => {
    const Notes = await insertNote(newNote);
    return Notes;
};
module.exports = {
    createNote,
  };
const prisma = require("../db/index.js");

const getAllNotes = async () => {
  const notes = await prisma.note.findMany();
  return notes;
};

const getNoteById = async (noteId) => {
  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });
  return note;
};

const insertNote = async (newNote) => {
  const NoteinsertNotes = await prisma.Note.create({
    data: {
      taskId: newNote.taskId,
      userId: newNote.userId,
      content: newNote.content,
    },
  });
  return NoteinsertNotes;
};

const updateNote = async (noteId, updatedNoteData) => {
  const updatedNote = await prisma.Note.update({
    where: {
      id: noteId,
    },
    data: updatedNoteData,
  });
  return updatedNote;
};

const deleteNote = async (noteId) => {
  await prisma.note.delete({
    where: {
      id: noteId,
    },
  });
};
module.exports = {
  insertNote,
  deleteNote,
  getNoteById,
  getAllNotes,
  updateNote,
};

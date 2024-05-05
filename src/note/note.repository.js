const prisma = require("../db/index.js");
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
};

const prisma = require("../db/index.js");
const insertReminder = async (newReminder) => {
  const ReminderinsertReminders = await prisma.Reminder.create({
    data: {
      taskId: newReminder.taskId,
      reminderTime: new Date(newReminder.reminderTime),
    },
  });
  return ReminderinsertReminders;
};
const deleteReminder = async (reminderId) => {
  await prisma.reminder.delete({
    where: {
      id: reminderId,
    },
  });
};
module.exports = {
  insertReminder,
  deleteReminder,
};

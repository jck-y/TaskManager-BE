const prisma = require("../db/index.js");

const getAllReminders = async () => {
  const reminders = await prisma.reminder.findMany();
  return reminders;
};



const getReminderById = async (reminderId) => {
  const reminder = await prisma.reminder.findUnique({
    where: {
      id: reminderId,
    },
  });
  return reminder;
};

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

const updateReminder = async (reminderId, updatedReminderData) => {
  const updatedReminder = await prisma.Reminder.update({
    where: {
      id: reminderId,
    },
    data: updatedReminderData,
  });
  return updatedReminder;
};

module.exports = {
  insertReminder,
  deleteReminder,
  getReminderById,
  getAllReminders,
  updateReminder,
};

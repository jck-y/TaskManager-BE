const prisma = require("../db");



const {
  insertReminder,
  getReminderById,
  getAllReminders,
  deleteReminder: deleteReminderService,
} = require("./reminder.repository");

const findAllReminders = async () => {
  const reminders = await getAllReminders();
  return reminders;
};

const findReminderById = async (reminderId) => {
  const reminder = await getReminderById(reminderId);
  return reminder;
};

const createReminder = async (newReminder) => {
  const Reminders = await insertReminder(newReminder);
  return Reminders;
};
const deleteReminder = async (reminderId) => {
  await deleteReminderService(reminderId);
};
module.exports = {
  createReminder,
  deleteReminder,
  findReminderById,
  findAllReminders,
};

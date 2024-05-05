const prisma = require("../db");
const {
  insertReminder,
  deleteReminder: deleteReminderService,
} = require("./reminder.repository");
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
};

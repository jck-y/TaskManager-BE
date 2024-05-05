const prisma = require("../db");
const {
    insertReminder,
  } = require("./reminder.repository");
  const createReminder = async (newReminder) => {
    const Reminders = await insertReminder(newReminder);
    return Reminders;
};
module.exports = {
    createReminder,
  };
const express = require("express");
const prisma = require("../db/index.js");




const router = express.Router();
const { createReminder, deleteReminder, findReminderById, findAllReminders, updateReminder,

 } = require("./reminder.service.js");

router.get("", async (req, res) => {
  try {
    const result = await findAllReminders();
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "Get all reminders",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Gagal mendapatkan reminder",
    });
  }
});

router.get("/:id", async (req, res) => {
  const reminderId = parseInt(req.params.id);
  try {
    const reminder = await findReminderById
    (reminderId);
    res.status(200).json({
      status: "success",
      message: `Reminder dengan ID ${reminderId}`,
      data: reminder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Reminder tidak dapat ditemukan",
    });
  }
});

router.post("", async (req, res) => {
  const newReminder = req.body;
  try {
    const insertReminder = await createReminder(newReminder);
    console.log(insertReminder);
    res.status(200).json({
      status: "success",
      message: "Reminder telah dibuat",
      data: insertReminder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Reminder tidak dapat dibuat karena error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  const reminderId = parseInt(req.params.id);
  try {
    await deleteReminder(reminderId);
    res.status(200).json({
      status: "success",
      message: `Reminder dengan ID ${reminderId} telah dihapus`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Reminder tidak dapat dihapus",
    });
  }
});

router.put("/:id", async (req, res) => {
  const reminderId = parseInt(req.params.id);
  const updatedReminderData = req.body;

  try {
    const updatedReminder = await updateReminder(reminderId, updatedReminderData);
    res.status(200).json({
      status: "success",
      message: `Reminder dengan ID ${reminderId} telah berhasil diupdate`,
      data: updatedReminder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat mengupdate reminder",
    });
  }
});

module.exports = router;

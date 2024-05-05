const express = require("express");
const prisma = require("../db/index.js");

const router = express.Router();
const { createReminder, deleteReminder } = require("./reminder.service.js");
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
module.exports = router;

const express = require ('express');
const prisma = require("../db/index.js");

const router = express.Router();
const {
    createReminder,
  } = require("./reminder.service.js");
  router.post("", async (req, res) => {
    const newReminder = req.body;
    try {
        const insertReminder= await createReminder(newReminder);
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
  module.exports = router;

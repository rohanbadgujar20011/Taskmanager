// taskmodule.js
const mongoose = require("mongoose");

const Task = new mongoose.Schema({
  task_info: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", Task);

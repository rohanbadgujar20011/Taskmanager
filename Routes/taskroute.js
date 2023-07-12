// taskroutes.js
const express = require("express");
require("dotenv").config();
const router = express.Router();
const Task = require("../Modules/taskmodule");
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.post("/addtask", async (req, res) => {
  const { task_info } = req.body;
  console.log(req.body);
  try {
    const temp_task = {
      task_info: task_info,
    };
    const Taskadd = await Task.create(temp_task);

    res.status(201).json({ message: "Added Successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.get("/alltask", async (req, res) => {
  try {
    const Alltask = await Task.find();

    res.status(201).json(Alltask);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Singletask = await Task.findByIdAndDelete({ _id: id });
    res.status(201).json(Singletask);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const Singletaskforedit = await Task.findById({ _id: id });
    res.status(201).json(Singletaskforedit);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//FOR UPDATE TASK
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  const { task_info, date, complete } = req.body;
  try {
    const updatetask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({ updatetask, message: "Updated Sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//FOR COMPLETE TASK

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const completetoggle = await Task.findByIdAndUpdate(id);
    completetoggle.complete = !completetoggle.complete;
    completetoggle.save();
    res.status(201).json(completetoggle.complete);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;

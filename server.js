const express = require("express");
const app = express();
require("dotenv").config();
const Port = process.env.Port || 5000;
const ConnectionDb = require("./connection");
const taskroutes = require("./Routes/taskroute");
const cors = require("cors");
app.use(cors());
const start = async () => {
  try {
    await ConnectionDb();
    app.listen(Port, () => {
      console.log(`${Port} is Live`);
    });
  } catch (error) {
    console.log(error);
  }
};
app.get("/", (req, res) => {
  res.send("yes alive");
});
app.use(taskroutes);
start();

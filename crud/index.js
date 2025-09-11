const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./Routes/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Nensi:dhari123@cluster1.aaqrzee.mongodb.net/Exam",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/song", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : localhost:" + PORT);
});
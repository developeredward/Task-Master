const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const dbUrl =
  "mongodb+srv://edwardberth1:admin@cluster0.ncuh0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDb();

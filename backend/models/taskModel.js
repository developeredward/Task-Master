const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    maxlength: [20, "Title cannot be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    // maxlength: [300, "Description cannot be more than 300 characters"],
  },
  startingTime: {
    type: Date,
    required: [true, "Starting time is required"],
  },
  endingTime: {
    type: Date,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["design", "development", "research", "meeting", "idea", "other"],
  },
  progress: {
    type: Number,
    default: 0,
    enum: [0, 25, 50, 75, 100],
    min: 0,
    max: 100,
  },
  // tasks: {
  //   type: Object,
  //   default: {
  //     Introduction: {
  //       type: Boolean,
  //       value: false,
  //     },
  //     "Task Desctiption": {
  //       type: Boolean,
  //       value: false,
  //     },
  //     "Task Review": {
  //       type: Boolean,
  //       value: false,
  //     },
  //     "Question and Answer": {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  // },
  tasks: {
    type: Array,
    default: [
      {
        type: Boolean,
        name: "Introduction",
        value: false,
      },
      {
        type: Boolean,
        name: "Task Description",
        value: false,
      },
      {
        type: Boolean,
        name: "Task Review",
        value: false,
      },
      {
        type: Boolean,
        name: "Question and Answer",
        value: false,
      },
    ],
  },
  members: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);

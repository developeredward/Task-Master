const asyncHandler = require("express-async-handler");

const Task = require("../models/taskModel");

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json(tasks);
});

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Public
const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  res.status(200).json(task);
});

// @desc    Create a task
// @route   POST /api/tasks
// @access  Public

const addTask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Title is required");
  }
  const task = await Task.create({
    title: req.body.title,
    description: req.body.description,
    startingTime: req.body.startingTime,
    endingTime: req.body.endingTime,
    category: req.body.category,
    members: req.body.members,
  });

  res.status(201).json(task);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  task.title = req.body.title || task.title;
  task.description = req.body.description || task.description;
  task.startingTime = req.body.startingTime || task.startingTime;
  task.endingTime = req.body.endingTime || task.endingTime;
  task.category = req.body.category || task.category;
  task.members = req.body.members || task.members;

  const updatedTask = await task.save();

  res.status(200).json(updatedTask);
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }
  await task.deleteOne();

  res.status(200).json({ message: "Task removed" });
});

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask };

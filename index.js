const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://dooito-client-sharifrayhan.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
const connectDB = require("./src/config/mongoose");
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const userController = require("./src/controllers/userController");
const taskController = require("./src/controllers/taskController");

// Users
app.post("/users", userController.createUser);
app.get("/users", userController.getAllUsers);
app.get("/users/:id", userController.getSingleUser);

// Users
app.get("/tasks", taskController.allTasks);
app.post("/tasks", taskController.createTask);
app.put("/tasks/:id", taskController.updateTask);
app.get("/tasks/:id", taskController.singleTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.get("/", (req, res) => {
  res.send("Welcome to Server!");
});

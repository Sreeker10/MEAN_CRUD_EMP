const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const userRouters = require("./routes/user-routes"); // Assuming this is where your user routes are defined

app.use(express.json());

// Route to handle user-related routes
app.use(userRouters);

// Default route to verify server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

// MongoDB connection function
async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/UsersDb");
  console.log("Connected to MongoDB");
}

// Connect to MongoDB
connectDB();

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

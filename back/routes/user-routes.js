const express = require("express");
const router = express.Router();
const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../handlers/userHandlers");

// Route to fetch all users
router.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

// Route to fetch a single user by ID
router.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("ID:", userId); // Log the ID for verification

  const user = await getUser(userId);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

// Route to update an existing user
router.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("ID:", userId); // Log the ID for verification
  await updateUser(userId, req.body);
  res.status(200).send("User updated successfully");
});

// Route to add a new user
router.post("/users", async (req, res) => {
  console.log("req.body", req.body);

  await addUser(req.body);
  res.status(201).send("User added successfully");
});

router.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log("ID:", userId);
  await deleteUser(userId);
  res.status(200).send("User deleted successfully");
});

module.exports = router;

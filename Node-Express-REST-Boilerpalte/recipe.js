const express = require("express");
const app = express();

// Define a GET endpoint for the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a GET endpoint for a specific resource
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  // Query the database to get user with the specified ID
  const user = { id: id, name: "John Doe" };
  res.send(user);
});

// Define a POST endpoint for creating a new resource
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  // Create a new user in the database
  const newUser = { id: 1, name: name, email: email };
  res.status(201).send(newUser);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

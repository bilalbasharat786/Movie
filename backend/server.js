const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

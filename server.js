// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/loginpage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Define a Mongoose schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a Mongoose model
const User = mongoose.model("User", userSchema);

// Create a new user (for testing purposes)
const newUser = new User({
  username: "exampleUser",
  email: "example@example.com",
  password: "securePassword",
});

// Save the user to the database
newUser
  .save()
  .then(() => console.log("User saved successfully!"))
  .catch((err) => console.error("Error saving user:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

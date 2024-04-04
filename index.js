const express = require("express");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the SQLite database file
const db = new sqlite3.Database("data.sqlite");

// Endpoint to fetch all categories
app.get("/api/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.error("Error fetching categories:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint to fetch all subcategories
app.get("/api/subcategories", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, rows) => {
    if (err) {
      console.error("Error fetching subcategories:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(rows);
    }
  });
});

// Endpoint to fetch all duas
app.get("/api/duas", (req, res) => {
  db.all("SELECT * FROM dua", (err, rows) => {
    if (err) {
      console.error("Error fetching duas:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(rows);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

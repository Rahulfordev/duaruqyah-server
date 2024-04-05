const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

// Endpoint to fetch a single dua by ID
app.get("/api/subcategories/:id", (req, res) => {
  const id = req.params.id;

  db.get("SELECT * FROM sub_category WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Error fetching dua:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else if (!row) {
      res.status(404).json({ error: "Dua not found" });
    } else {
      res.json(row);
    }
  });
});

app.get("/api/subcategories/cat_id/:id", (req, res) => {
  const { id: cat_id } = req.params;
  console.log(cat_id);
  db.all(
    "SELECT * FROM sub_category WHERE cat_id = ?",
    [cat_id],
    (err, row) => {
      if (err) {
        console.error("Error fetching dua:", err.message);
        res.status(500).json({ error: "Internal server error" });
      } else if (!row) {
        res.status(404).json({ error: "Dua not found" });
      } else {
        res.json(row);
      }
    }
  );
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

// Endpoint to fetch a single dua by ID
app.get("/api/duas/:id", (req, res) => {
  const id = req.params.id;

  db.get("SELECT * FROM dua WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Error fetching dua:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else if (!row) {
      res.status(404).json({ error: "Dua not found" });
    } else {
      res.json(row);
    }
  });
});

app.get("/api/duas/cat_id/:id", (req, res) => {
  const { id: cat_id } = req.params;
  console.log(cat_id);
  db.all("SELECT * FROM dua WHERE cat_id = ?", [cat_id], (err, row) => {
    if (err) {
      console.error("Error fetching dua:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else if (!row) {
      res.status(404).json({ error: "Dua not found" });
    } else {
      res.json(row);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    res.render("categories", { categories: result });
  });
});

router.post("/add", (req, res) => {
  const category_name = req.body.category_name;
  db.query(
    "INSERT INTO categories (category_name) VALUES (?)",
    [category_name],
    () => res.redirect("/categories")
  );
});

module.exports = router;

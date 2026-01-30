const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const sql = `
    SELECT p.product_id, p.product_name,
           c.category_id, c.category_name
    FROM products p
    JOIN categories c ON p.category_id = c.category_id
    LIMIT ? OFFSET ?
  `;

  db.query(sql, [limit, offset], (err, result) => {
    res.render("products", { products: result, page });
  });
});

router.post("/add", (req, res) => {
  const { product_name, category_id } = req.body;
  db.query(
    "INSERT INTO products (product_name, category_id) VALUES (?, ?)",
    [product_name, category_id],
    () => res.redirect("/products")
  );
});

module.exports = router;

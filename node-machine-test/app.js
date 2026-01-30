const express = require("express");
const bodyParser = require("body-parser");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.redirect("/categories");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

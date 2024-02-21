const express = require("express");
const mongoose = require("mongoose");
const BlogRouter = require("./routes/BlogRouter");
const dbUrl = "mongodb://localhost:27017/node-blog";
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(dbUrl)
  .then((res) => app.listen(3000))
  .catch((err) => console.log("error"));
app.get("/", (req, res) => res.redirect("/blogs"));
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});
app.use("/blogs", BlogRouter);

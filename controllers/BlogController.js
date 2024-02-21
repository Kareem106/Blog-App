const Blog = require("../models/blog");
const blog_index = (req, res) => {
  Blog.find()
    .sort({ updatedAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home Page", blogs: result });
    });
};
const blog_create_get = (req, res) => {
  res.render("create", { title: "create-blog" });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render("details", { title: "Blog | " + blog.title, blog });
    })
    .catch((err) => console.log(err));
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => res.redirect("/"))
    .catch((result) => console.log(result));
};
module.exports = {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_details,
  blog_delete,
};

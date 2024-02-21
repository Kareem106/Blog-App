const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const blogSheme = new Scheme(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Blog = mongoose.model("blogs", blogSheme);
module.exports = Blog;

const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/BlogController");
router.get("/", BlogController.blog_index);
router.get("/create-blog", BlogController.blog_create_get);
router.get("/:id", BlogController.blog_details);
router.delete("/:id", BlogController.blog_delete);
router.post("/add-blog", BlogController.blog_create_post);
module.exports = router;

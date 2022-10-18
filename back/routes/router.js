const express = require('express');
const router = express.Router();
const middle = require("../middleware/middle");
const middlePost = require("../middleware/middlePost");

const { postInfo, filterPosts, deletePost, updatePost, validateRegister, validatePost, detailedPosts } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);
router.post("/update", updatePost);
router.post("/createPost", middlePost, validatePost)
router.get('/detailedPosts', detailedPosts);

router.post('/validateRegister', middle, validateRegister);

module.exports = router; 
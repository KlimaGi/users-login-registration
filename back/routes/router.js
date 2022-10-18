const express = require('express');
const router = express.Router();
const middleRegister = require("../middleware/middle");
const middlePost = require("../middleware/middlePost");

const { postInfo, filterPosts, deletePost, updatePost, validateRegister, validateLogin, validatePost, detailedPosts } = require('../controllers/mainController');

router.post("/addPost", postInfo);
router.post("/filter", filterPosts);
router.get("/delete/:id", deletePost);
router.post("/update", updatePost);
router.post("/createPost", middlePost, validatePost)
router.get('/detailedPosts', detailedPosts);

router.post('/validateRegister', middleRegister, validateRegister);
router.post('/validateLogin', validateLogin);



module.exports = router; 
const express = require('express');
const router = express.Router();

const {
  emailValid,
  passwordValid,
  userValid,
  photoValid,
  secretValid
} = require("../middleware/middle");

const {
  register,
  login,
  userData,
  setPhoto,
  postData,
  allPosts,
  singlePost
} = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/userProfile/:secret', secretValid, userData);
router.post('/setPhoto', secretValid, setPhoto);

router.post('/postData', secretValid, postData);
router.get('/allPosts/:secret', secretValid, allPosts);
router.get('/singlePost/:id/:secret', secretValid, singlePost);



module.exports = router; 
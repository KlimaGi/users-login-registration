const express = require('express');
const router = express.Router();

const { emailValid, passwordValid, userValid, photoValid } = require("../middleware/middle");

const { register, login } = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, photoValid, register);
router.post('/login', login);


module.exports = router; 
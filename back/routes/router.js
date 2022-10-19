const express = require('express');
const router = express.Router();

const { emailValid, passwordValid, userValid } = require("../middleware/middle");

const { register, login } = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);


module.exports = router; 
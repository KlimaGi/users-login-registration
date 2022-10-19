const express = require('express');
const router = express.Router();

const { emailValid, passwordValid, userValid, photoValid, secretValid } = require("../middleware/middle");

const { register, login, getPhoto } = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, photoValid, register);

router.post('/login', login);
router.get('/getPhoto/:secret', secretValid, getPhoto)


module.exports = router; 
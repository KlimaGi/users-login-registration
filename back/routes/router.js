const express = require('express');
const router = express.Router();

const { emailValid, passwordValid, userValid, photoValid, secretValid } = require("../middleware/middle");

const { register, login, getPhoto, setPhoto } = require('../controllers/mainController');

router.post('/register', emailValid, passwordValid, userValid, register);
router.post('/login', login);
router.get('/getPhoto/:secret', secretValid, getPhoto);
router.post('/setPhoto', setPhoto);

router.get('/profile/:secret', secretValid,)


module.exports = router; 
const express = require('express');
const router = express.Router();
const middleRegister = require("../middleware/middle");

const { validateRegister, validateLogin } = require('../controllers/mainController');

router.post('/validateRegister', middleRegister, validateRegister);
router.post('/validateLogin', validateLogin);



module.exports = router; 
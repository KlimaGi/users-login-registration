const isEmail = require('sane-email-validation');
const userSchema = require('../schemas/userSchema');
const sendRes = require('../modules/universalRes');

module.exports = {
  emailValid: (req, res, next) => {
    const { email } = req.body;

    if (!isEmail(email)) return sendRes(res, true, "wrong email", null);
    next();
  },

  passwordValid: (req, res, next) => {
    const { password, password2 } = req.body;
    if (password !== password2) return sendRes(res, true, "both passwords should match", null);

    if (password.length < 5) return sendRes(res, true, "password should have at least 5 symbols", null);

    if (password.length > 20) return sendRes(res, true, "password should have less than 20 symbols", null);

    next();
  },

  userValid: async (req, res, next) => {
    const { email } = req.body;
    const userExists = await userSchema.findOne({ email });
    if (userExists) return sendRes(res, true, "user already exists", null);

    next();
  }







}
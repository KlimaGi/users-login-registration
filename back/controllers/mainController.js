const keygen = require("keygenerator");
const userSchema = require('../schemas/userSchema');
const resSend = require('../modules/universalRes');

module.exports = {

  register: async (req, res) => {
    const secret = keygen._();
    const newUser = new userSchema({ ...req.body, secret });
    await newUser.save();
    resSend(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const userExists = await userSchema.findOne({ email, password });
    console.log('userExists.data.secret', userExists.secret);
    if (userExists) return resSend(res, false, 'all good', userExists.secret);

    resSend(res, true, "bad credentials", null);
  },

}
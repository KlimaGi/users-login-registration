const userSchema = require('../schemas/userSchema');
const resSend = require('../modules/universalRes');

module.exports = {

  register: async (req, res) => {
    const newUser = new userSchema(req.body);
    await newUser.save();
    resSend(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const userExists = await userSchema.findOne({ email, password });
    if (userExists) return resSend(res, false, 'all good', userExists);

    resSend(res, true, "bad credentials", null);
  },

}
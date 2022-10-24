const keygen = require("keygenerator");
const bcrypt = require('bcrypt');
const userSchema = require('../schemas/userSchema');
const resSend = require('../modules/universalRes');

module.exports = {

  register: async (req, res) => {
    const { password } = req.body;
    const hash = await bcrypt.hash(password, 15);

    const secret = keygen._();
    const newUser = new userSchema({ ...req.body, password: hash, secret });
    console.log('newUser', newUser);
    await newUser.save();
    resSend(res, false, 'all good', null);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    //todo: create middle to check if user exist
    const userExists = await userSchema.findOne({ email });

    if (userExists) {
      const compare = await bcrypt.compare(password, userExists.password);

      if (compare) return resSend(res, false, 'all good', userExists.secret);
    }

    resSend(res, true, "bad credentials", null);
  },
  getPhoto: async (req, res) => {
    const { secret } = req.params;

    const userExists = await userSchema.findOne({ secret });

    resSend(res, false, 'all good', { photo: userExists.photo });
  },
  setPhoto: async (req, res) => {
    console.log('req.body-setPhoto', req.body);
    const { secret, photo } = req.params;

    const userData = await userSchema.findOneAndUpdate(
      { secret: secret },
      { $set: { photo: photo } },
      { new: true }
    );
    console.log('userData', userData);
    res.send({ ok: 'ok-photo', userData: userData });
  }

}
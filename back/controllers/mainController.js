const userSchema = require('../schemas/userSchema');

module.exports = {

  validateRegister: async (req, res) => {
    console.log('req.body', req.body);
    const newUser = new userSchema(req.body);
    await newUser.save();
    res.send({ error: false, message: '', user: newUser })
  },
  validateLogin: async (req, res) => {
    console.log('req login', req.body);
    const { email, password } = req.body;
    const user = await userSchema.find({ email, password });
    console.log('user', user);
    if (user.length) res.send({ ok: 'ok', error: false, user });
    else res.send({ ok: 'ok', error: true });
  },

}
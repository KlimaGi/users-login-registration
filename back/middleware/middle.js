const isEmail = require('sane-email-validation');

module.exports = (req, res, next) => {
  const { email, password, password2 } = req.body;

  console.log(email, password, password2);
  let message = '';

  if (!isEmail(email)) message = "wrong email";
  if (password !== password2) message = "both passwords should match";
  if (password.length < 5) message = "password should have at least 5 symbols";
  if (password.length > 20) message = "password should have less than 20 symbols";

  if (message !== '') return res.send({ error: true, message });
  else next();
}
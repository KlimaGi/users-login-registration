module.exports = (req, res, next) => {
  const { title, description, photo, username, city } = req.body;
  console.log(title, description, photo, username, city);
  let message = '';

  if (title.length < 10) message = 'the title should be longer than 10 symbols';
  if (title.length > 100) message = 'the title should be shorter than 100 symbols';

  if (description.length < 30) message = 'the description should be longer than 30 symbols';
  if (description.length > 300) message = 'the description should be shorter than 300 symbols';

  if (!photo.includes('http')) message = 'bad photo url';
  if (!username[0].match(/[A-Z]/g)) message = 'username first letter should be upperCase';
  if (username.length < 4) message = 'username should be longer than 4 letters';
  if (username.length > 20) message = 'username should be shorter than 20 letters';

  if (message !== '') res.send({ error: true, message: message });
  else next();
} 
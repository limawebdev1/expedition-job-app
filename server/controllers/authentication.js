const Users = require('../models/users');

exports.signup = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name } = req.body;
    // Form validation
    const onlyLetters = new RegExp('^[A-Za-z ]+$');
    if (!onlyLetters.test(first_name) || !onlyLetters.test(last_name)) {
      return res.status(400).send({
        error: 'Names must only contain letters'
      });
    }
    if (!email || !password) {
      return res.status(400).send({
        error: 'Email and password required'
      });
    }
    if (password && password.length < 8) {
      return res.status(400).send({
        error: 'Password must be at least 8 characters'
      });
    }
    // Check for existing user email
    const existingUser = await Users.findUser({
      email: email.toLowerCase()
    });
    if (existingUser) {
      return res.status(403).send({
        error: 'Email is in use'
      });
    }
    const [newUser] = await Users.createUser({ email: email.toLowerCase(), password, first_name, last_name });
    return res.send(Users.jwtUserResponse(newUser));
  } catch (e) {
    return next(e);
  }
};

exports.signin = async (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  try {
    const user = await Users.findUserWithPassword({ email: email });
    if (!user) {
      return res.status(404).send({
        error: `User ${email} does not exist`
      });
    }
    const match = await Users.comparePasswords(password, user.password);
    if (match) {
      return res.send(Users.jwtUserResponse(user));
    }
    return res.status(401).send({
      error: 'Incorrect email or password'
    });
  } catch (e) {
    return next(e);
  }
};
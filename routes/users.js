const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

//Handle Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please dont leave any field empty!' });
  }

  //Check passwords match
  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  //Check password length
  if (password.length < 6) {
    errors.push({ msg: 'Password length should be 6 characters or more' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    res.send('Passed');
  }
});

module.exports = router;

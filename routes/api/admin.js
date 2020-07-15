const express = require('express');
const router = express.Router();

// Require passport for middleware
const passport = require('passport');

// Require jsonwebtoken to make token for session
const jwt = require('jsonwebtoken');

// Import key variabel
const key = require('../../config/variabel/keys-variabel');

// Import transport-user schema
// const TransportUser = require("simpfleet_models/models/TransportUser");
// const LogisticsCompany = require("simpfleet_models/models/LogisticsCompany");

const Admin = require('../../models/Admin');

// Require for validation inputs
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Routes

// @Routes  GET All Driver /api/user/
// @Private True
router.get('/', (req, res) => {
  Admin.find().then((driver) => {
    res.json(driver);
  });
});

// @Route GET /api/user/:id
// @Private True
router.get('/:_id', (req, res) => {
  Admin.findById(req.params._id).then((data) => {
    res.json(data);
  });
});

// @Route POST /api/user/login
// @Private False
router.post('/login', async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  const user = await Admin.findOne({
    email,
  });

  if (!user) {
    errors.email = 'User tidak ditemukan';
    return res.status(404).json(errors);
  }

  const isValidPassword = user.validPassword(password);

  if (!isValidPassword) {
    errors.password = 'Password salah';
    return res.status(400).json(errors);
  }

  const payload = {
    _id: user._id,
    email: user.email,
    nama: user.nama,
    image: user.image,
  };

  jwt.sign(payload, key.SECRET_OR_KEY, { expiresIn: '1d' }, (err, token) => {
    return res.status(200).json({
      success: true,
      token: 'Bearer ' + token,
      user,
    });
  });
});

// @Route POST /api/driver/register
// @Private False
router.post('/register', async (req, res) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);

  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }

  const { nama, password, email } = req.body;
  const userEmail = await Admin.findOne({ email });

  if (userEmail) {
    // errors.email = 'Email sudah ada, silahakan daftar dengan email yg lain!';
    return res.status(400).json(errors);
  } else {
    const newUser = new Admin({
      email,
      nama,
    });

    newUser.password = newUser.generateHash(password);
    newUser
      .save()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => console.log(err));
  }
});

module.exports = router;

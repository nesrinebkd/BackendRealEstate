const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
// REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    console.log('added');
  } catch (error) {
    res.status(500).json(error);
  }
});
//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json('No such a username found!');
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    Originalpassword !== req.body.password &&
      res.status(401).json('Wrong password');
    const { password, ...others } = user._doc;
    Originalpassword == req.body.password && res.status(200).json(user);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;

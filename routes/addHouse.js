const router = require('express').Router();
const House = require('../models/House');
const { verifyToken } = require('./verifyToken');

// ADD house
router.post('/', verifyToken, async (req, res) => {
  const newHouse = new House(req.body);
  try {
    const savedHouse = await newHouse.save();
    res.status(200).json(savedHouse);
    console.log('added');
  } catch (error) {
    res.status(500).json(error);
  }
});

//
module.exports = router;

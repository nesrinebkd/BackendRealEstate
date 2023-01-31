const router = require('express').Router();
const House = require('../models/House');
const { verifyToken } = require('./verifyToken');

//CREATE

router.post('/', verifyTokenAndAuthorization, async (req, res) => {
  const newHouse = new House(req.body);

  try {
    const savedHouse = await newHouse.save();
    res.status(200).json(savedHouse);
  } catch (err) {
    res.status(500).json(err);
  }
});

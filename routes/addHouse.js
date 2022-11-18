const router = require('express').Router();
const User = require('../models/House');

// ADD house
router.post('/addhouse', async (req, res) => {
  const newHouse = new House(req.body);
  try {
    const savedHouse = await newHouse.save();
    res.status(201).json(savedHouse);
    console.log('added');
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

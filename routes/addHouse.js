const router = require('express').Router();
const User = require('../models/House');

// ADD house
router.post('/addhouse', async (req, res) => {
  const newHouse = new House({
    title: req.body.title,
    description: req.body.description,
    proprety_type: req.body.proprety_type,
    status: req.body.status,
    'address.wilaya': req.body.address.wilaya,
    'address.commune': req.body.address.commune,
    'address.street': req.body.adress.street,
    price: req.body.price,
    img: req.body.img,
  });
  try {
    const savedHouse = await newHouse.save();
    res.status(201).json(savedHouse);
    console.log('added');
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

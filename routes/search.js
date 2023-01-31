const router = require('express').Router();
const House = require('../models/House');
router.get('/getHouses/:key', async (req, res) => {
  //let payload=req.body.payload.trim();
  key = req.params.key.split(',');
  let search = await House.find({
    $or: [
      { 'address.wilaya': { $regex: key[0], $options: 'i' } },
      { 'address.commune': { $regex: key[1], $options: 'i' } },
    ],
  });
  res.send(search);
});
module.exports = router;

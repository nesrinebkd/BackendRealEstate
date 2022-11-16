const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    proprety_type: { type: Array, required: true },
    status: { type: Array, required: true },
    home_features: {
      address: [
        {
          wilaya: {
            type: String,
            required: true,
          },
          commune: {
            type: String,
            required: true,
          },
          street: {
            type: String,
            required: true,
          },
        },
      ],
      nmbr_rooms: { type: Number },
      nmbr_bathrooms: { type: Number },
      nmbr_floors: { type: Number },
      square_feet: { type: Double },
    },
    price: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('House', HouseSchema);

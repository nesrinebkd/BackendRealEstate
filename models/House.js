const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    proprety_type: { type: String, required: true },
    status: { type: String, required: true },

    address: {
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

    nmbr_rooms: { type: Number },
    nmbr_bathrooms: { type: Number },
    nmbr_floors: { type: Number },
    square_feet: { type: Number },

    price: { type: Number, required: true },
    img: { type: String, required: true },
    id_user: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('House', HouseSchema);

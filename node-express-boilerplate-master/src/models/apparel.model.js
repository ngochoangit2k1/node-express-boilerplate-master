const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const apparelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    born: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
apparelSchema.plugin(toJSON);
apparelSchema.plugin(paginate);

apparelSchema.pre('save', async function (next) {
  next();
});

/**
 * @typedef Apparel
 */
const Apparel = mongoose.model('Apparel', apparelSchema);

module.exports = Apparel;

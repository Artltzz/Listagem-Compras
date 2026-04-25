const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    note: { type: String, trim: true },
    checked: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Item', itemSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true, 
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      match: [/.+\@.+\..+/, 'Please use a valid email address'], 
    },
    mobile: {
      type: String,
      required: true,
      unique: true, 
      match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'], 
    },
    password: {
      type: String,
      required: true,
      minlength: 6, 
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model('User', userSchema);

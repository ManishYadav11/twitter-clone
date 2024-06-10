const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    // Make confirmPassword optional
    // It's not stored in the database, only used for validation
    // during signup
    required: false
  },
  followers: {
    type: Array,
    default: []
  },
  following: {
    type: Array,
    default: []
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

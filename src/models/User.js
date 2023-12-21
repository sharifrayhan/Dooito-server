const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  },

},
{
  timestamps: true, 
});

const User = mongoose.model('users', userSchema);

module.exports = User;

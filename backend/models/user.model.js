const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema(
  {
    phone: { type: String, require: true },
    name: { type: String, require: false },
    activated: { type: Boolean, require: false, default: false },
    avatar:{type:String ,require:false }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', userSchema , 'users')
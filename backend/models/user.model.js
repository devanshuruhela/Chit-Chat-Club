const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema(
  {
    phone: { type: String, required: true },
    name: { type: String, required: false },
    activated: { type: Boolean, required: false, default: false },
    avatar:{type:String ,required:false ,get:(avatar)=>{
      if(avatar){
      return `${process.env.BASE_URL}${avatar}`}
      return avatar;
    } }
  },
  {
    timestamps: true,
    toJSON :{getters:true}
  }
);

module.exports = mongoose.model('user', userSchema , 'users')
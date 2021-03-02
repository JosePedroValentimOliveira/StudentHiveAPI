  
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  birthday:{type:String,required:true},
  gender:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  profileImage:{type:String,default:"https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"}
    



})
const User = mongoose.model('User',UserSchema,'Users');
module.exports = User;
const mongoose = require('mongoose');



var userSchema = new mongoose.Schema({
    user_name : {type:String, required:true},
    email_id : {type: String, required:true},
    user_password : {type:String, required:true},
    quiz_score : {type:Number, required:true},
});


const Users = mongoose.model('Users',userSchema);
module.exports = {Users};
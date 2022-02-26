const mongoose = require('mongoose');



var scoreSchema = new mongoose.Schema({
    user_name : {type:String, required:true},
    quiz_score : {type:Number, required:true},
    
});


const Scores = mongoose.model('Scores',scoreSchema);
module.exports = {Scores};
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Venkateshwar:RBXs3omRCJd42ThL@cluster0.qq1is.mongodb.net/QUIZGAME?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(!err)
    {
        console.log('Database Connected!');
    }
    
    else
    {
        console.log(` Error in connecting the database ${err}`); 
    }
    
});

module.exports = mongoose;
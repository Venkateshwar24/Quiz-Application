const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;
var {Scores} = require('./../models/scorecardModel');
const jwt = require('jsonwebtoken');




router.get('/',(req,res) => {
    Scores.find((err,docs)=>{
        if(!err)
         res.send(docs);
        else
         console.log(err);
    })
});

 
router.post('/', (req,res) => {
    var users = new Scores({
        user_name: req.body.user_name,
        quiz_score: req.body.quiz_score,
    });

    users.save((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log(err);
        }
    });
});
module.exports = router;
const express = require('express');
const app = express();
var userController=require('./controller/userController');
var scorecardController = require('./controller/scorecardController');
const cors=require('cors');
const bodyParser=require('body-parser');
const {mongoose}=require('./db');
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json());

app.use('/users',userController);
app.use('/scorecard',scorecardController)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

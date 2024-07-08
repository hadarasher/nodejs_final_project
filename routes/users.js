const express = require('express');
const users = require('../models/users_data');
const router = express.Router();


/* GET users:id listing. */
router.get('/:id', async function(request,response){
  try{
  
    const userId = request.params.id;

    // Finding the user in the database with the given id
    const user = await users.findOne({id : userId});

    // Checking to see if user exists in the database
    if(!user){
      return response.status(404).json({error: "User not found"});
    }

    response.status(200).json(user);
  }catch(error){
    console.error(`error user id ${error}`);
    response.status(500).json({error:"Server Error"})
  }
  
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is users page');
});

module.exports = router;

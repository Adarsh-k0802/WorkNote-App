const express = require('express');
 const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//create a user using POST "/api/auth". Doen't require Auth
router.post('/',[
    body('name','Enter a valid Name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','Enter minimum 8 Characters').isLength({ min: 8 }),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
    res.json({error:'Please Enter Unique Email Id',message:err.message})})
    
})

module.exports = router
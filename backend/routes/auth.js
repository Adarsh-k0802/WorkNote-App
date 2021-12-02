const express = require('express');
 const User = require('../models/User');
const router = express.Router();

//create a user using POST "/api/auth". Doen't require Auth
router.get('/',(req,res)=>{
    console.log(req.body);
    const user =User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router
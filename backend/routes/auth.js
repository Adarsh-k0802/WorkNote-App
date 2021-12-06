const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'adarshyoboy' ;


//create a user using POST "/api/auth/createuser". Doen't require Auth(Login)
router.post(
  "/createuser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter minimum 8 Characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    //if there are errors return bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check weather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res
          .status(400)
          .json({ error: "This Email already has been registered" });
      }


      const salt = await bcrypt.genSaltSync(10);
      const secPass=await bcrypt.hash( req.body.password,salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:secPass,
      });
      const data = {
       
        user:{
            id:user.id
        }

      }
      const authtoken = jwt.sign(data, JWT_SECRET);
     
    //   res.json(user);
    res.json({authtoken:authtoken});


    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

//Authenticate a user using POST "/api/auth/login". 
router.post(
    "/login",
    [
     
      body("email", "Enter a valid Email").isEmail(),
      body("password", "Password can't be blank").exists(),
      
    ],
    async (req, res) => {
        //if there are errors return bad request and the errors.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const{email,password}= req.body;
        try{
             let user = await User.findOne({email});

             if(!user){
                return res.status(400).json({ errors: "Please try to login with correct credentials" });
             }
             const passwordCompare = await bcrypt.compare(password,user.password);
             if(!passwordCompare){
                return res.status(400).json({ errors: "Please try to login with correct credentials" }); 
             }

             const data = {
       
                user:{
                    id:user.id
                }
        
              }
              const authtoken = jwt.sign(data, JWT_SECRET);

              res.json({authtoken:authtoken});
             
        }
        catch (error){
            console.error(error.message);
      res.status(500).send("Internal Server Error Occured");

        }
    })

module.exports = router;

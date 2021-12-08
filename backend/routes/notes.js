const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//ROUTE 1 Get all the notes using: GET "/api/auth/createuser". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch (error){
        console.error(error.message);
  res.status(500).send("Internal Server Error Occured");

    }
  
});

//ROUTE 2 Add a new Note using: POST "/api/auth/addnote". login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 Characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {

    try {
        const {title, description, tag}=req.body;

    //if there are errors return bad request and the errors.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
        title, description, tag, user:req.user.id
    })
   const savedNote = await note.save()

   res.json(savedNote)
    } catch (error){
        console.error(error.message);
  res.status(500).send("Internal Server Error Occured");

    }

    

     

  }
);

module.exports = router;

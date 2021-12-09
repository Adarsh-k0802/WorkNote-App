const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const { findOneAndUpdate, findById } = require("../models/Note");

//ROUTE 1 Get all the notes using: GET "/api/notes/createuser". login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
  res.json(notes);
    } catch (error){
        console.error(error.message);
  res.status(500).send("Internal Server Error Occured");

    }
  
});

//ROUTE 2 Add a new Note using: POST "/api/notes/addnote". login required
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

//ROUTE 3 Update an existing Note using: POST "/api/notes/updatenote". login required
router.put(
  "/updatenote/:id",fetchuser, async (req, res) => {

   const {title,description,tag} = req.body;

   try {
     //Create a newNote object
   const newNote = {};
   if(title){newNote.title=title};
   if(description){newNote.description=description};
   if(tag){newNote.tag=tag};

   //Find the note to be updated and update it

   let note = await Note.findById(req.params.id);
   if(!note){return res.status(404).send("Not Found")}

   if(note.user.toString() !== req.user.id){
     return res.status(401).send("Not Allowed");
   }

   note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote},{new:true})
   res.json({note});
   } catch (error){
    console.error(error.message);
res.status(500).send("Internal Server Error Occured");

}

   



  })

  //ROUTE 4 Deleting an existing Note using: POST "/api/notes/deletenote". login required
  router.delete(
    "/deletenote/:id",fetchuser, async (req, res) => {

      
      try {
        //Find the note to be deleted and delete it

   let note = await Note.findById(req.params.id);
   if(!note){return res.status(404).send("Not Found")}

   //Allow deletion only if user owns this note.

   if(note.user.toString() !== req.user.id){
     return res.status(401).send("Not Allowed");
   }

   note = await Note.findByIdAndDelete(req.params.id)
   res.json({"Sucess":"Note has been Deleted", note:note});  
      } catch (error){
        console.error(error.message);
  res.status(500).send("Internal Server Error Occured");

    }


         

    })


module.exports = router;

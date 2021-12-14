import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{

 const notesInitial = [
    {
      "_id": "61b0bb6332b4cbf8f5af1a0e",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:19.162Z",
      "__v": 0
    },
    {
      "_id": "61b0bb6332b4cbf8f5af1a10",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:19.372Z",
      "__v": 0
    },
    {
      "_id": "61b0bb6332b4cbf8f5af1a12",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:19.561Z",
      "__v": 0
    },
    {
      "_id": "61b0bb6332b4cbf8f5af1a14",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:19.744Z",
      "__v": 0
    },
    {
      "_id": "61b0bb6332b4cbf8f5af1a16",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:19.905Z",
      "__v": 0
    },
    {
      "_id": "61b0bb6432b4cbf8f5af1a18",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-08T14:04:20.122Z",
      "__v": 0
    },
    {
      "_id": "61b17b4eb04a3dd1b867d8bd",
      "user": "61adb0c8ee85a528f6be5129",
      "title": "my title",
      "description": "my description",
      "tag": "personel",
      "Date": "2021-12-09T03:43:10.012Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)


  //Add a note
  const addNote=(title, description, tag)=>{
      const note={
        "_id": "61b17b4eb04a3dd1b4867d8bd",
        "user": "61adb0c8ee85a528f6be51529",
        "title":title,
        "description": description,
        "tag":tag,
        "Date": "2021-12-09T03:43:10.012Z",
        "__v": 0
      };
setNotes(notes.concat(note))
  }

  //Delete a note
 const deleteNote=(id)=>{

  console.log("Deleting a note with id"+ id);
  const newNotes = notes.filter((note)=>{return note._id!==id});
  setNotes(newNotes);
      
  }
  //Edit a note
  const editNote=(id, title, description, tag)=>{
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id===id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
      
    }
      
}


 return(   <NoteContext.Provider value={{notes, addNote,deleteNote,editNote}}>

    {props.children}

    </NoteContext.Provider>
    )

}

export default NoteState;
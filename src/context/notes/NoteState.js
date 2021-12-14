import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{

  const host = "http://localhost:5000";

 const notesInitial = [
   
  ]

  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes
  const getNotes =async ()=>{

    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
     method: 'GET',
    
     headers: {
       'Content-Type': 'application/json',
       'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhZGIwYzhlZTg1YTUyOGY2YmU1MTI5In0sImlhdCI6MTYzODk0ODAyNX0.y7TD3coYHxLF9KL6SYnpKO1LkVAK9woWadmJrS9SPR0'
      
     }
   });
   
const json = await response.json()
console.log(json)
    setNotes(json)
 }


  //Add a note
  const addNote=async (title, description, tag)=>{

     //API CALL
     const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhZGIwYzhlZTg1YTUyOGY2YmU1MTI5In0sImlhdCI6MTYzODk0ODAyNX0.y7TD3coYHxLF9KL6SYnpKO1LkVAK9woWadmJrS9SPR0'
       
      },
      
      body: JSON.stringify({title, description, tag})
    });
    


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
   //API CALL

  console.log("Deleting a note with id"+ id);
  const newNotes = notes.filter((note)=>{return note._id!==id});
  setNotes(newNotes);
      
  }
  //Edit a note
  const editNote = async (id, title, description, tag)=>{
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
     
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhZGIwYzhlZTg1YTUyOGY2YmU1MTI5In0sImlhdCI6MTYzODk0ODAyNX0.y7TD3coYHxLF9KL6SYnpKO1LkVAK9woWadmJrS9SPR0'
       
      },
      
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json(); 
  

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id===id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
      
    }
      
}


 return(   <NoteContext.Provider value={{notes, addNote,deleteNote,editNote,getNotes}}>

    {props.children}

    </NoteContext.Provider>
    )

}

export default NoteState;
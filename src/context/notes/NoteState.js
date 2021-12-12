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



 return(   <NoteContext.Provider value={{notes, setNotes}}>

    {props.children}

    </NoteContext.Provider>
    )

}

export default NoteState;
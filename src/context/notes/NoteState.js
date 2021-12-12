import react from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{

 const s1 ={
     "name":"adarsh",
     "class":"12b"
 }
 const [state, setstate] = useState(s1)

 const update=()=>{
     setTimeout(() => {
         setstate({
            "name":"raju",
            "class":"10a"
         })
     }, 5000);
 }



 return(   <NoteContext.Provider value={{state,update}}>

    {props.children}

    </NoteContext.Provider>
    )

}

export default NoteState;
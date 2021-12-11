import react from "react";

import NoteContext from "./noteContext";

const NoteState=(props)=>{

 const state ={
     "name":"adarsh",
     "class":"12b"
 }



 return(   <NoteContext.Provider value={state}>

    {props.children}

    </NoteContext.Provider>
    )

}

export default NoteState;
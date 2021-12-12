import React from 'react'

function NoteItem(props) {

   const {note} = props;
    return (
        <div className="col-md-3">

<div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description} Et voluptate qui officia veniam. Aliquip labore nisi sint pariatur sit veniam irure irure tempor sit. Magna in proident duis commodo do pariatur tempor deserunt. Do id ex reprehenderit in occaecat eiusmod mollit dolore do sunt ipsum. Sit amet consequat consectetur consequat incididunt non et amet ea. Laboris consectetur culpa qui mollit. Aute et eu id id ad cillum incididunt ex nisi anim pariatur adipisicing.</p>
    
  </div>
</div>
            
        </div>
    )
}

export default NoteItem

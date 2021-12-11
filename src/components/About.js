import  React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {

    const a = useContext(noteContext)
    return (
        <div>
           This is about {a.name}
        </div>
    )
}

export default About

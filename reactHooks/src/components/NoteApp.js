import {useEffect, useState} from "react"
import AddNote from './AddNote' 
import Navbar from './Navbar' 
import NoteList from './NoteList' 

const NoteApp = () => {
    const [notes,setNote] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'))
        if(data){
            setNote(data)
        }
    },[]) /* componentDidMount */

    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes]) /* updateDidMount */

    const newNote = (title,description) => {
        setNote([...notes, {id:notes.length+1, title:title, description:description}]) 
        /*  */
    }

    const removeNote = (id) => {
        setNote(notes.filter(note => note.id !== id))
    }

    return(
        <>
            <div className="container">
                <Navbar notes={notes}/>
                <NoteList notes={notes} removeNote={removeNote}/>
                <AddNote newNote={newNote}/>
            </div>
        </>
    )
}

export default NoteApp;
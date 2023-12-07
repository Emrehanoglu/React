import {useEffect, useState} from "react"
import AddNote from './AddNote' 

const NoteList = () => {
    const [notes,setNote] = useState([
        {id:1, title:'note 1'},
        {id:2, title:'note 2'},
        {id:3, title:'note 3'}
    ])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'))
        if(data){
            setNote(data)
        }
    },[]) /* componentDidMount */

    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes]) /* updateDidMount */

    const newNote = (title) => {
        setNote([...notes, {id:notes.length+1, title:title}]) 
        /*  */
    }

    return(
        <>
            <ul className="note-list">
                { notes.map(note => {
                    return (
                        <li key={note.id}>{ note.title }</li>
                        );
                    }) }
            </ul>
            <AddNote newNote={newNote}/>
        </>
    )
}

export default NoteList;
import {useEffect, /* useState */ useReducer} from "react"
import notesReducer from '../reducers/notesReducer'
import AddNote from './AddNote' 
import Navbar from './Navbar' 
import NoteList from './NoteList' 

const NoteApp = () => {
    const [notes,dispatch] = useReducer(notesReducer,[])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'))
        if(data){
            /* setNote(data) */
            dispatch({
                type: "POPULATE_NOTES",
                notes : data
            })
        }
    },[]) /* componentDidMount */

    useEffect(() => {
        localStorage.setItem('notes',JSON.stringify(notes))
    },[notes]) /* updateDidMount */

    /* const newNote = (title,description) => {
        setNote([...notes, {id:notes.length+1, title:title, description:description}]) 
        dispatch({
            type: "ADD_NOTE",
            id:notes.length+1, title:title, description:description
        })
    } */

    /* const removeNote = (id) => {
        setNote(notes.filter(note => note.id !== id))
        dispatch({
            type: "REMOVE_NOTE",
            id
        })
    } */

    return(
        <>
            <div className="container">
                <Navbar notes={notes}/>
                <NoteList notes={notes} dispatch={dispatch}/>
                <AddNote notes={notes} dispatch={dispatch}/>
            </div>
        </>
    )
}

export default NoteApp;
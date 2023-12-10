import { useContext } from "react"
import NotesContext from "../contexts/notesContext"

const Note = (props) => {
    const {dispatch} = useContext(NotesContext)

    const removeNote = (id) => {
        /* setNote(notes.filter(note => note.id !== id)) */
        dispatch({
            type: "REMOVE_NOTE",
            id
        })
    }

    return(<li onClick={() => removeNote(props.note.id)} key={props.note.id}>
            <h1 className="title">
                { props.note.title }
            </h1>    
            <p>{ props.note.description }</p>
        </li>)
}  

export default Note
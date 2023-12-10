import Note from "./Note";
import NotesContext from "../contexts/notesContext";
import { useContext } from "react";

const NoteList = () => {
    const {notes, dispatch} = useContext(NotesContext)
    return(
        <div className="note-list">
            <ul>
            { notes.map(note => {
                return (
                    <Note note={note} key={note.id} dispatch={dispatch}/>
                    );
            }) }
            </ul>
        </div> 
    )
}

export default NoteList
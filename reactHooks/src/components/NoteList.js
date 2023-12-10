import Note from "./Note";

const NoteList = (props) => {
    return(
        <div className="note-list">
            <ul>
            { props.notes.map(note => {
                return (
                    <Note note={note} key={note.id} dispatch={props.dispatch}/>
                    );
            }) }
            </ul>
        </div> 
    )
}

export default NoteList
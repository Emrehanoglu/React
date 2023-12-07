const Note = (props) => {
    return(<li onClick={() => props.removeNote(props.note.id)} key={props.note.id}>
            <h1 className="title">
                { props.note.title }
            </h1>    
            <p>{ props.note.description }</p>
        </li>)
}  

export default Note
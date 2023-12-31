import { useContext, useState } from "react"
import NotesContext from "../contexts/notesContext"

const AddNote = () => {
    const [title,setTitle]= useState('')
    const [description,setDescription]= useState('')
    const {dispatch, notes} = useContext(NotesContext) /* burada bana bir obje dönüyor ve bu obje aracılığıyla props parametrelerine ulaşacağım */

    const handleSubmit = (e) => {
        e.preventDefault()
        /* props.newNote(title,description) */
        dispatch({
            type: "ADD_NOTE",
            id:notes.length+1, title:title, description:description
        })
        setTitle('')
        setDescription('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title"/>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} 
            placeholder="Description"/>
            <input type="submit" value="Add Note" />
        </form>
    )

}

export default AddNote
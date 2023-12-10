import { useState } from "react"

const AddNote = (props) => {
    const [title,setTitle]= useState('')
    const [description,setDescription]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        /* props.newNote(title,description) */
        props.dispatch({
            type: "ADD_NOTE",
            id:props.notes.length+1, title:title, description:description
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
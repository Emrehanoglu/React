import { useContext } from "react"
import NotesContext from "../contexts/notesContext"

const Navbar = () => {
    const {notes} = useContext(NotesContext)
    return(
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>Toplam {notes.length} adet not mevcut</p>
        </div>
    )
}

export default Navbar
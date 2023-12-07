const Navbar = (props) => {
    return(
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>Toplam {props.notes.length} adet not mevcut</p>
        </div>
    )
}

export default Navbar
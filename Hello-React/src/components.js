var root = ReactDOM.createRoot(document.getElementById('root'))

//function component

/* function Header(props){
    return <h2>ToDo App</h2>
} */
function Todo(props){
    return (
        <ul>
            <li>Gorev 1</li>
            <li>Gorev 2</li>
            <li>Gorev 3</li>
        </ul>
    )
}

//class component
class Header extends React.Component{
    render(){
        return <h2>ToDo App</h2>
    }
}

class ToDoApp extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Todo />
            </div>
        )
    }
}

root.render(<ToDoApp />)
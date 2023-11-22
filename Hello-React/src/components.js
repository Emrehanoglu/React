var root = ReactDOM.createRoot(document.getElementById('root'))

//function component

/* function Header(props){
    return <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
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
        return <div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </div>
    }
}

class ToDoApp extends React.Component{
    render(){
        return (
            <div>
                <Header title="ToDo Uygulaması" description="Bekleyen Görevler"/>
                <Todo />
            </div>
        )
    }
}

root.render(<ToDoApp />)
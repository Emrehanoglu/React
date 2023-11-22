var root = ReactDOM.createRoot(document.getElementById('root'))

//class component
class ToDoApp extends React.Component{
    render(){
        var data = {
            title:"ToDo Uygulaması",
            description:"Bekleyen Görevler",
            items:["görev1","görev2","görev3"]
        }
        return(
            <div>
                <Header title={data.title} description={data.description}/>
                <ToDoList items={data.items}/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class ToDoList extends React.Component{
    render(){
        return (
            <ul>
                {this.props.items.map((item,index) => <ToDoItem key={index} item={item}/>)} 
            </ul>
        )
    }
}

class ToDoItem extends React.Component{
    render(){
        return (
            <li>{this.props.item}</li>
        )
    }
}

root.render(<ToDoApp />)
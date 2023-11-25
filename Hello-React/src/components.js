var root = ReactDOM.createRoot(document.getElementById('root'))

//class component
class ToDoApp extends React.Component{
    constructor(props){
        super(props)
        this.clearItems = this.clearItems.bind(this)
        this.state = {
            items:["görev1","görev2","görev3"]
        }
    }
    clearItems(){
        this.setState({
            items : []
        })
    }

    render(){
        var data = {
            title:"ToDo Uygulaması",
            description:"Bekleyen Görevler",
        }
        return(
            <div>
                <Header title={data.title} description={data.description}/>
                <ToDoList items={this.state.items} clear={this.clearItems}/>
                <NewItem />
            </div>
        )
    }
}

class ToDoList extends React.Component{    
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((item,index) => <ToDoItem key={index} item={item}/>)} 
                </ul>
                <button onClick={this.props.clear}>Temizle</button>
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

class NewItem extends React.Component{
    onFormSubmit(e){ /* burada dışarıdan bir parametre almadığım için bind işlemi yapmadım */
        e.preventDefault()
        const item = e.target.elements.txtItem.value.trim() /* trim ile sağında solunda bosluk var ise siliyorum */
        if(item){
            e.target.elements.txtItem.value = ""
        }
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem"/>
                <button type="submit">Ekle</button>
            </form>
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
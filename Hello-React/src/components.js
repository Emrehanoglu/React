var root = ReactDOM.createRoot(document.getElementById('root'))

//class component
class ToDoApp extends React.Component{
    constructor(props){
        super(props)
        this.clearItems = this.clearItems.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            items:["görev1","görev2","görev3"]
        }
    }
    clearItems(){
        this.setState({
            items : []
        })
    }

    deleteItem(item){
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            return {
                items:arr
            }
        })
    }

    addItem(item){
        if(this.state.items.indexOf(item) > -1 ){
            return 'aynı elemanı ekleyemezsiniz'
        }
        this.setState((prevState) => { /* prevState ile onceki items hali gelir */
            return {items : prevState.items.concat(item)} /* concat ile ekleme işlemi yaptık */
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
                <ToDoList items={this.state.items} clear={this.clearItems} deleteItem={this.deleteItem}/>
                <NewItem addItem={this.addItem}/>
            </div>
        )
    }

    componentDidMount(){
        console.log("Uygulama olusturuldu/yuklendi")
        const json_obje = localStorage.getItem("items")
        const items = JSON.parse(json_obje)
        if(items){
            this.setState({
                items : items
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Uygualama içerisinde veriler değişti")
        if(prevState.items.length !== this.state.length){
            /* önceki state bilgileri mevcuttaki state arasında bir farklılık var ise */
             const json_str = JSON.stringify(this.state.items)
             /* LS üzerinde JSON türünde string ifade saklayabiliyorduk */
             localStorage.setItem("items",json_str)
        }
    }
}

class ToDoList extends React.Component{    
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((item,index) => <ToDoItem deleteItem={this.props.deleteItem} key={index} item={item}/>)} 
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
    constructor(props){
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error : ""
        }
    }
    onFormSubmit(e){ /* burada dışarıdan bir parametre almadığım için bind işlemi yapmadım */
        e.preventDefault()
        const item = e.target.elements.txtItem.value.trim() /* trim ile sağında solunda bosluk var ise siliyorum */
        if(item){
            e.target.elements.txtItem.value = ""
            const error = this.props.addItem(item)
            this.setState({
                error:error
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem"/>
                    <button type="submit">Ekle</button>
                </form>
            </div>
        )
    }
}

class ToDoItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem(){
        this.props.deleteItem(this.props.item)
    }
    render(){
        return (
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>x</button>
            </li>
        )
    }
}

root.render(<ToDoApp />)
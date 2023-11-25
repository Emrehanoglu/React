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
            <div className="container my-3">
                {/* my-3 ile y ekseninde alttan ve üstten bosluk bırakır */}
                <div className="card">
                    <div className="card-header">
                        <Header title={data.title} description={data.description}/>
                    </div>
                    <div className="card-body">
                        <ToDoList items={this.state.items} clear={this.clearItems} deleteItem={this.deleteItem}/>
                    </div>
                    <div className="card-footer">
                        <NewItem addItem={this.addItem}/>
                    </div>
                </div>
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

function ToDoList(props){
    return (
        <div>
            <ul className="list-group">
                {props.items.map((item,index) => <ToDoItem deleteItem={props.deleteItem} key={index} item={item}/>)} 
            </ul>
            {props.items.length>0 ?
                <p>
                  <button className="btn btn-outline-danger float-end mt-3 btn-sm" onClick={props.clear}>Temizle</button>
            </p> 
            : <div className="alert alert-warning">Bir Görev Ekleyiniz</div>
            }
        </div>
    )
}

/* class ToDoList extends React.Component{    
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
} */

function Header(props){
    return(
        <div className="text-center">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

/* class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
} */

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
                    <div className="input-group">
                        <input className="form-control" type="text" name="txtItem"/>
                        <button className="btn btn-primary" type="submit">Ekle</button>
                    </div>
                </form>
            </div>
        )
    }
}

function ToDoItem(props){
    return (
        <li className="list-group-item">
            {props.item}
            <button className="btn btn-danger btn-sm float-end" onClick={() => {props.deleteItem(props.item)}}>x</button>
            {/* float-end ile bulunduğu <li> tagının en sonuna gider */}
        </li>
    )
}

/* class ToDoItem extends React.Component{
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
} */

root.render(<ToDoApp />)
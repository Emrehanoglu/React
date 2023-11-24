var root = ReactDOM.createRoot(document.getElementById('root'))

class User extends React.Component{
    constructor(props){
        super(props)
        this.changeEmail = this.changeEmail.bind(this)
        this.state = {
            name: "Emre Hanoglu",
            email: "emre@gmail.com"
        }
    }
    changeEmail(){
        this.setState({
            name:"Arda Hanoğlu",
            email:"arda@gmail.com"
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail}>Change Email</button>
            </div>
        )
    }
}

root.render(<User />)
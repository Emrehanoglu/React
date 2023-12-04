import React, { Component } from 'react'

export class User extends Component {
    /* constructor(props) {
      super(props)
    
      this.state = {
         id:"72378457",
         name:"Emre Hanoglu",
         username:"Emrehanoglu",
         avatar_url:"https://avatars.githubusercontent.com/u/72378457?v=4",
         github_url:"https://api.github.com/users/Emrehanoglu",
         website:"www.linkedin.com/in/emrehanoglu",
         followers: "2"
      }
    } */

    render() {
        return (
            <div className="card mb-3">
                <div className="row g-0"> {/* g-0 : kolonlar arasında boşluk olmayacak */}
                    <div className="col-md-3">
                        <img src={this.props.user.avatar_url} alt={this.props.user.login} className='img-fluid rounded-start avatar'/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                        <h3 className="card-title">{this.props.user.login}</h3>
                        <a target='_blank' rel="noreferrer" href={this.props.user.html_url} className='btn btn-primary'>Github Profile</a>
                        {/* target='_blank' : butonlara tıklanıldığında farklı sekmelerde sayfaların acılmasını sağlar */}
                         </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default User
import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
      super(props)
    
      /* user bilgilerimin tutulduğu şablon */
      this.state = {
         id:"72378457",
         name:"Emre Hanoglu",
         username:"Emrehanoglu",
         avatar_url:"https://avatars.githubusercontent.com/u/72378457?v=4",
         github_url:"https://api.github.com/users/Emrehanoglu",
         website:"www.linkedin.com/in/emrehanoglu",
         followers: "2"
      }
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="row g-0"> {/* g-0 : kolonlar arasında boşluk olmayacak */}
                    <div className="col-md-3">
                        <img src={this.state.avatar_url} alt={this.state.name} className='img-fluid rounded-start'/>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                        <h3 class="card-title">{this.state.name}</h3>
                        <p>Follower : {this.state.followers}</p>
                        <a target='_blank' href={this.state.github_url} className='btn btn-primary'>Github Profile</a>
                        <a target='_blank' href={this.state.website} className='btn btn-primary ms-2'>Website</a>
                        {/* target='_blank' : butonlara tıklanıldığında farklı sekmelerde sayfaların acılmasını sağlar */}
                         </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default User
import React, { Component } from 'react'
import User from './User'

export class UserList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            users : [
                {
                    id:"72378457",
                    name:"Emre Hanoglu",
                    username:"Emrehanoglu",
                    avatar_url:"https://avatars.githubusercontent.com/u/72378457?v=4",
                    github_url:"https://api.github.com/users/Emrehanoglu",
                    website:"www.linkedin.com/in/emrehanoglu",
                    followers: "2"
                },
                {
                    id:"1",
                    name:"mojombo",
                    username:"mojombo",
                    avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
                    github_url:"https://api.github.com/users/Emrehanoglu",
                    website:"www.linkedin.com/in/emrehanoglu",
                    followers: "2"
                },
                {
                    id:"2",
                    name:"defunkt",
                    username:"defunkt",
                    avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",
                    github_url:"https://api.github.com/users/Emrehanoglu",
                    website:"www.linkedin.com/in/emrehanoglu",
                    followers: "2"
                }        
            ]
        }
    }

    render() {
        return (
         <div>
            {this.state.users.map(user => (
                <User user={user} key={user.id}/>
            ))}
         </div>
        )
    }
}

export default UserList
import React from 'react'
import User from './User'
import Loading from './Loading'

const UserList = (props) => {
    if(props.loading){
        return <Loading />
    }
    return (
        <div>
        {props.users.map(user => (
            <User user={user} key={user.id}/>
        ))}
        </div>
    )
}

export default UserList
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserList from './components/UserList';
/*import User from './components/User'; */

// xmlhttprequest,jquery,axios,fetch

import React, { useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  const searchUsers = (keyword) => {
    setLoading({loading:true})

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
      .then(response => response.json())
      .then(data => {
        setUsers(data.items) 
        setLoading(false)
      })
    },1000)
  }

  const clearResults = () => {
    setUsers([])
  }

  const displayError = (msg,type) => {
    setError({msg:msg,type:type})

    setTimeout(() => {
      setError(null)
    },3000)
  }
  /*  */

  return (
    <div>
      <Navbar />
      <Search searchUsers={searchUsers} clearResults={clearResults} showClearButton={users.length>0?true:false}
        displayAlert={displayError} />
      <Alert error={error}/>
      <div className="container mt-3">
        <UserList users={users} loading={loading}/>
      </div>
    </div>
  )
}

export default App
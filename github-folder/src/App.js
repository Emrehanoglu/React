import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserList from './components/UserList';

import React, { useState } from 'react'
import UsersContextProvider from './context/usersContext';

const App = () => {
  // const [loading, setLoading] = useState(false)
  // const [users, setUsers] = useState([])
  
  const [error, setError] = useState(null)

  const displayError = (msg,type) => {
    setError({msg:msg,type:type})

    setTimeout(() => {
      setError(null)
    },3000)
  }

  return (
    <UsersContextProvider>
      <Navbar />
      <Search displayAlert={displayError} />
      <Alert error={error}/>
      <div className="container mt-3">
        <UserList />
      </div>
    </UsersContextProvider>
  )
}

export default App
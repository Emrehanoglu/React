import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Search from './components/Search';
import UserList from './components/UserList';

import React from 'react'
import UsersContextProvider from './context/usersContext';
import AlertContextProvider from './context/alertContext';

const App = () => {
  // const [loading, setLoading] = useState(false)
  // const [users, setUsers] = useState([])
  /* bunları artık usersContext içerisinde useReducer ile hallediyorum */
  
  /* const [error, setError] = useState(null) */ 
  /* bunu artık alertContext içerisinde useReducer ile hallediyorum */

  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar />
        <Search />
        <Alert />
        <div className="container mt-3">
          <UserList />
        </div>
      </AlertContextProvider>
    </UsersContextProvider>
  )
}

export default App
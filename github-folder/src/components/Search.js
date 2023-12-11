import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/usersContext'
import { AlertContext } from '../context/alertContext'

const Search = () => {
    const [keyword,setKeyword] = useState('')
    const {searchUsers, users, clearResults} = useContext(UsersContext)
    const {displayError} = useContext(AlertContext)

    const onChange = (e) => {
        setKeyword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(keyword === ''){
            displayError('Anahtar Kelime Giriniz','danger')
        }else{
            searchUsers(keyword)
            setKeyword('')
        }        
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div class="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Anahtar Kelime'/>
                    <button className="btn btn-outline-secondary" type="submit">Ara</button>
                </div>
            </form>
            {
                users.length > 0 &&
                <button onClick={clearResults} className='btn btn-outline-danger btn-block mt-2'>Sonuçları Temizle</button>
            }
        </div>
    )
}

export default Search
import React, { useState } from 'react'

const Search = (props) => {
    const [keyword,setKeyword] = useState('')
    

    const onChange = (e) => {
        setKeyword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(keyword === ''){
            props.displayAlert('Anahtar Kelime Giriniz','danger')
        }else{
            props.searchUsers(keyword)
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
                props.showClearButton &&
                <button onClick={props.clearResults} className='btn btn-outline-danger btn-block mt-2'>Sonuçları Temizle</button>
            }
        </div>
    )
}

export default Search
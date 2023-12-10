import React from 'react'

const User = (props) => {
    return (
        <div className="card mb-3">
            <div className="row g-0"> {/* g-0 : kolonlar arasında boşluk olmayacak */}
                <div className="col-md-3">
                    <img src={props.user.avatar_url} alt={props.user.login} className='img-fluid rounded-start avatar'/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                    <h3 className="card-title">{props.user.login}</h3>
                    <a target='_blank' rel="noreferrer" href={props.user.html_url} className='btn btn-primary'>Github Profile</a>
                    {/* target='_blank' : butonlara tıklanıldığında farklı sekmelerde sayfaların acılmasını sağlar */}
                        </div>
                </div>
            </div>
        </div>
    )
}


export default User
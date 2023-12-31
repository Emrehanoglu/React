import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <div className="nav navbar-dark bg-primary">
      <div className="container">
          <a href="/" className='navbar-brand'>
              {/* burada ikon kullanımı yapacağım bunun için projeme bootstrap icon kütüphanemi 'npm i bootstrap-icons@1.10.3' komutu ile
              ekliyorum ardından da custom.scss içerisinde projeye import etmem gerekiyor*/}
              <i className={props.icon}></i> {props.title}
          </a>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
    icon:"bi bi-github",
    title:"Github Finder"
}

Navbar.propTypes={
    icon : PropTypes.string.isRequired, /* icon bilgisi string olacak ve boş geçilemeyecek */
    title : PropTypes.string.isRequired, /* title bilgisi string olacak ve boş geçilemeyecek */
}

export default Navbar
import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="nav navbar-dark bg-primary">
        <a href="/" className='navbar-brand'>
            {/* burada ikon kullanımı yapacağım bunun için projeme bootstrap icon kütüphanemi 'npm i bootstrap-icons@1.10.3' komutu ile
            ekliyorum ardından da custom.scss içerisinde projeye import etmem gerekiyor*/}
            <i class={this.props.icon}></i> {this.props.title}
        </a>
      </div>
    )
  }
}
Navbar.defaultProps = {
    icon:"bi bi-github",
    title:"Github Finder"
}

export default Navbar
import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}>
          <div className="brand">
            <div className="logo-dot"></div>
            <div className="brand-name">Symbotz</div>
          </div>
        </Link>
        <nav className="main-nav">
          <ul>
            <Link to="/services" style={{textDecoration:"none"}}><li className="header-tabs">Services</li></Link>
            <Link to="/aboutus" style={{textDecoration:"none"}}><li className="header-tabs">About</li></Link>
            <Link to="/services" style={{textDecoration:"none"}}><li className="header-tabs">Careers</li></Link>
            <Link to="/aboutus" style={{textDecoration:"none"}}><li className="header-tabs">Education</li></Link>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn primary">Contact us</button>
        </div>
      </div>
    </header>
  )
}

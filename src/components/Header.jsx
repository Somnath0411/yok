import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header white-bg">
      <div className="header-inner ">
        <Link to="/" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}>
          <div className="brand">
            <div className="logo-dot"></div>
            <div className="brand-name prim-blue txt-28">Symbotz</div>
          </div>
        </Link>
        <nav className="main-nav">
          <ul>
            <Link to="/services" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}><li className="header-tabs txt-16">Services</li></Link>
            <Link to="/aboutus" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}><li className="header-tabs txt-16">About</li></Link>
            <Link to="/Careers" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}><li className="header-tabs txt-16">Careers</li></Link>
            <Link to="/Education" onClick={()=>window.scrollTo(0,0)}style={{textDecoration:"none"}}><li className="header-tabs txt-16">Education</li></Link>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn primary prim-bluebg white txt-16">Contact us</button>
        </div>
      </div>
    </header>
  )
}

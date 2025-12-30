import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo-dot" />
          <div className="brand-name">Symbotz</div>
        </div>
        <nav className="main-nav">
          <ul>
            <Link to="/services" style={{textDecoration:"none"}}><li>Services</li></Link>
            <Link to="/aboutus" style={{textDecoration:"none"}}><li>About us</li></Link>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn primary">Contact us</button>
        </div>
      </div>
    </header>
  )
}

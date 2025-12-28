import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo-dot" />
          <div className="brand-name">name</div>
        </div>
        <nav className="main-nav">
          <ul>
            <li>Products</li>
            <li>Services</li>
            <li>About us</li>
          </ul>
        </nav>
        <div className="cta">
          <button className="btn primary">Contact us</button>
        </div>
      </div>
    </header>
  )
}

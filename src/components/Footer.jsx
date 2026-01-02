import React from 'react'
import image from '../assets/send-btn-image.jpeg'
import {Link} from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-top container">
       <div>
        <h1>Let’s Work Together Smarter, Starting Today</h1>
       </div>
       <div>
         <button className="btn outline">Reach US</button>
       </div>
      </div>

      <div className="footer-links container">
        <div>
          <h5>NAVIGATION</h5>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <Link to="/services" onClick={()=>window.scrollTo(0,0)} style={{textDecoration:"none"}}><li>Services</li></Link>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h5>LEGAL</h5>
          <ul>
            <li>General Info</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h5>TALK TO US</h5>
          <ul>
            <li>zen@gmail.com</li>
            <li>+66 2399 1145</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div style={{padding:'40px' }} >
        <hr style={{  
          height: '1px', 
          backgroundColor: '#000000',
          margin: '20px',
          opacity: 0.75     
        }} />
      </div>
      <div className="footer-down container">
        <div className="logo-big">LOGO</div>
        <div>© 2025 Name. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

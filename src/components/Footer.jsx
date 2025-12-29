import React from 'react'
import image from '../assets/send-btn-image.jpeg'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-top container">
       <div>
        <h1>Let’s Work Together<br/>Smarter, Starting<br/>Today</h1>
       </div>
      </div>

      <div className="footer-links container">
        <div>
          <h5>NAVIGATION</h5>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h5>PRODUCTS</h5>
          <ul>
            <li>Intelligent Applications</li>
            <li>Cyber Resilience</li>
            <li>Digital Acceleration</li>
            <li>Cloud Modernization</li>
            <li>Data Intelligence</li>
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

      <div className="footer-down container">
        <div className="logo-big">LOGO</div>
        <div>© 2025 Name. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

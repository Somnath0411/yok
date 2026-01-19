import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
            <h1 className="main-heading fade-right">
              From idea to impact, faster than ever
            </h1>
            <p className="txt-19 fade-up">
              Design, develop, and modernize with AI, cloud, and data at the core
            </p>
             <div className="hero-ctas fade-up">
                <button className="btn outline prim-bluebg white txt-19">Reach us</button>
              </div>
        </div>
          <div className="hero-media fade-up">
           <img src="https://res.cloudinary.com/dra2qc1c7/image/upload/v1767868395/dxkqanotstxehm17cio4.png" alt="team" />
          </div> 
      </div>
    </section>
  )
}

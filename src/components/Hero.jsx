import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <FadeContent>
            <h1 className="main-heading ">
              From idea to impact, faster than ever
            </h1>
          </FadeContent>
          <FadeContent>
            <p className="txt-19">
              Design, develop, and modernize with AI, cloud, and data at the core
            </p>
          </FadeContent>
          <FadeContent>
             <div className="hero-ctas">
                <button className="btn outline prim-bluebg white txt-19">Reach us</button>
              </div>
          </FadeContent>
        </div>
        <FadeContent>
          <div className="hero-media">
           <img src="https://res.cloudinary.com/dra2qc1c7/image/upload/v1767868395/dxkqanotstxehm17cio4.png" alt="team" />
          </div> 
        </FadeContent>
      </div>
    </section>
  )
}

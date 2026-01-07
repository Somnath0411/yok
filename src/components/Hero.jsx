import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <FadeContent>
            <h1 className="main-heading hero-heading">
              From idea to impact, faster than ever
            </h1>
            <p className="lead">
              Design, develop, and modernize with AI, cloud, and data at the core
            </p>
          </FadeContent>
          <FadeContent>
             <div className="hero-ctas">
                <button className="btn outline">Reach us</button>
              </div>
          </FadeContent>
        </div>
        <FadeContent>
          <div className="hero-media">
           <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80&auto=format&fit=crop" alt="team" />
          </div> 
        </FadeContent>
      </div>
    </section>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
           From idea to impact, faster than ever
          </h1>
          <p className="lead">
             Design, develop, and modernize with AI, cloud, and data at the core
          </p>
          <div className="hero-ctas">
            <button className="btn outline">Reach US</button>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80&auto=format&fit=crop" alt="team" />
        </div>
      </div>
    </section>
  )
}

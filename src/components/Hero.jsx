import React from 'react'

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Build A <span className="accent">Future</span>
            <br /> Powered By <span className="accent">Expertise</span>
          </h1>
          <p className="lead">
            Advance your journey with professional IT services and personalized career guidance that help you reach your fullest potential.
          </p>
          <div className="hero-ctas">
            <button className="btn primary">Start Your Project</button>
            <button className="btn outline">Get Career Help</button>
          </div>
        </div>
        <div className="hero-media">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80&auto=format&fit=crop" alt="team" />
        </div>
      </div>
    </section>
  )
}

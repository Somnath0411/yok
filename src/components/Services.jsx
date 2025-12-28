import React from 'react'

function Card({highlight}){
  return (
    <div className={"service-card "+(highlight? 'highlight':'')}>
      <div className="service-icon">{/* icon */}</div>
      <h3>Intelligent Applications</h3>
      <p>Build agile, high-performing applications tailored to your goals. We design and modernize solutions that streamline workflows, enhance scalability, and drive measurable results.</p>
      <button className="btn outline small">Learn more</button>
    </div>
  )
}

export default function Services(){
  return (
    <section className="services container">
      <div className="services-top">
        <h2>Engineered for <span className="accent">Business Growth</span></h2>
        <p className="muted">Delivering reliable, scalable technology with speed and innovation so your business stays agile and ahead in a rapidly evolving digital landscape.</p>
      </div>
      <div className="services-row">
        <Card />
        <Card highlight />
        <Card />
      </div>
    </section>
  )
}

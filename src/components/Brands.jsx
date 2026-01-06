import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'


const logos = ['sample','sample  ','sample ',' sample ',' sample '];

export default function Brands(){
  return (
    <section className="brands">
      <div className="brands-inner container">
        <FadeContent threshold={0.3} delay={0.2}>
          <h2>Trusted by Industry Leaders</h2>
        </FadeContent>
        <FadeContent threshold={0.3} delay={0.2}>
          <div className="brands-row">
          {logos.map((l, i) => (
            <div key={i} className="brand-item">{l}</div>
          ))}
        </div>
          </FadeContent>
      </div>
    </section>
  )
}
import React from 'react'

const logos = ['sample','sample  ','sample ',' sample ',' sample '];

export default function Brands(){
  return (
    <section className="brands">
      <div className="brands-inner container">
        <h2>Trusted by Industry Leaders</h2>
        <div className="brands-row">
          {logos.map((l, i) => (
            <div key={i} className="brand-item">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

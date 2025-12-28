import React from 'react'

const logos = ['Brand4','Brand5','Brand6']

export default function Brands(){
  return (
    <section className="brands">
      <div className="brands-inner container">
        <h2>Brands that Trust our <span className="accent">IT Solutions</span></h2>
        <div className="brands-row">
          {logos.map((l, i) => (
            <div key={i} className="brand-item">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

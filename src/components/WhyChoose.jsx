import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'

export default function WhyChoose(){
  return (
    <div className="symbots-difference-bg">
      <section className="why">
      <div className="why-inner">
        <div className="why-text ">
            <h2 className="txt-48">The <span className="prim-blue">Symbotz</span> Difference</h2>
            <p className="muted darkblue-text txt-19">Connect your goals to the systems that support them.
            Build with clarity, scale with cloud confidence, and move faster with data guiding the way.</p>
            <ul className="expertise darkblue-text txt-19">
              <li className="active"><span className="dot active"/> Built right from the start</li>
              <li className="active"><span className="dot active"/> Scales when you need it</li>
              <li className="active"><span className="dot active"/> Support that stays with you</li>
            </ul>
        </div>
          <div className="why-media">
            <img src="https://res.cloudinary.com/dra2qc1c7/image/upload/v1767875270/pexels-fauxels-3184405_oatkbb.jpg" alt="illustration" />
          </div>
      </div>
    </section>
    </div>
    
  )
}

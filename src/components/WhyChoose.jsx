import React from 'react'
import FadeContent from '../assets/FadeContent.jsx'

export default function WhyChoose(){
  return (
    <div className="symbots-difference-bg">
      <section className="why">
      <div className="why-inner">
        <FadeContent threshold={0.3}>
        <div className="why-text">
            <h2 className="symbotz-difference-heading">The <span className="accent">Symbotz</span> Difference</h2>
            <p className="muted darkblue-text">Connect your goals to the systems that support them.
            Build with clarity, scale with cloud confidence, and move faster with data guiding the way.</p>
          <div className="expertise darkblue-text">
            <ul>
              <li className="active"><span className="dot active"/> Built right from the start</li>
              <li className="active"><span className="dot active"/> Scales when you need it</li>
              <li className="active"><span className="dot active"/> Support that stays with you</li>
            </ul>
          </div>
        </div>
        </FadeContent>
        <FadeContent threshold={0.3}>
          <div className="why-media">
            <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=900&q=80&auto=format&fit=crop" alt="illustration" />
          </div>
        </FadeContent>
      </div>
    </section>
    </div>
    
  )
}

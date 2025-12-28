import React from 'react'

export default function WhyChoose(){
  return (
    <section className="why container">
      <div className="why-inner">
        <div className="why-text">
          <h2>Why <span className="accent">Choose Us?</span></h2>
          <p className="muted">We help organizations move from digital ambition to execution. Our solutions are designed with precision, scalability, and measurable impact in mind—enabling you to innovate faster and operate smarter.</p>

          <div className="expertise">
            <h4>Expertise</h4>
            <ul>
              <li><span className="dot"/> Cloud Solutions</li>
              <li className="active"><span className="dot active"/> Security & Compliance</li>
              <li><span className="dot"/> AI & Automation</li>
            </ul>
          </div>
        </div>
        <div className="why-media">
          <img src="https://images.unsplash.com/photo-1593642532400-2682810df593?w=900&q=80&auto=format&fit=crop" alt="illustration" />
        </div>
      </div>
    </section>
  )
}

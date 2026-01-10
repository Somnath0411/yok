import React, { useState } from 'react';
const ServicesBuild = (props) => {
  const {buildservices}=props
  const [activeAppIndex, setActiveAppIndex] = useState(0);
 return (
    <section className="service-section">
      <div className="service-section-badge">
        <pre>Build</pre>
        <h2 className="width">Application Development & Modernization</h2>
      </div>
      <div className="service-content">
        <div className=" service-image">
          {/* The key={activeAppIndex} forces the image to re-mount and trigger CSS animations */}
          <img 
            src={buildservices[activeAppIndex].img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          />
        </div>
        <div className="service-text">
          <div className="service-list">
            {buildservices.map((service, index) => (
              <div 
                key={index} 
                className={`service-item ${activeAppIndex === index ? 'active' : 'inactive'}`}
                // Changed from onClick to onMouseEnter for smoother UX
                onMouseEnter={() => setActiveAppIndex(index)}
              >
                <h3>{service.title}</h3>
                <div className="description-wrapper">
                   <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
 )
}
export default ServicesBuild
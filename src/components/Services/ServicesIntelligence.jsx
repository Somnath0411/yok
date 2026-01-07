import React, { useState } from 'react';
const ServicesIntelligence = (props) => {
  const {intelligenceService}=props
  const [activeAppIndex, setActiveAppIndex] = useState(0);
 return (
    <section className="service-section">
        <div className="service-text">
          <h2 className="section-title">Data Analytics & Decision Intelligence</h2>
          <div className="service-list">
            {intelligenceService.map((service, index) => (
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
        <div className="service-image">
          {/* The key={activeAppIndex} forces the image to re-mount and trigger CSS animations */}
          <img 
            src={intelligenceService[activeAppIndex].img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          />
        </div>
      </section>
 )
}
export default ServicesIntelligence
import React, { useState } from 'react';
const ServicesScale = (props) => {
  const {scaleservices}=props
  const [activeCloudIndex, setActiveCloudIndex] = useState(0);
 return (
    <section className="service-section reverse">
        <div className="service-text">
          <h2 className="section-title">Cloud Infrastructure Services</h2>
          <div className="service-list">
            {scaleservices.map((service, index) => (
              <div 
                key={index} 
                className={`service-item ${activeCloudIndex === index ? 'active' : 'inactive'}`}
                // Changed from onClick to onMouseEnter
                onMouseEnter={() => setActiveCloudIndex(index)}
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
          <img 
            src={scaleservices[activeCloudIndex].img} 
            alt="Cloud Illustration" 
            className="fade-in" 
            key={activeCloudIndex} 
          />
        </div>
      </section>
 )
}
export default ServicesScale
import React, { useState } from 'react';
import { video } from 'framer-motion/client'

const ServicesBuild = (props) => {
  const { buildservices }= props
  // 1. Correctly use Hooks at the top level of the function
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [defaultClassName, setDefaultClassName] = useState(null);

  const makeInactive = () => {
    setDefaultClassName('inactive');
  };

  const makeActive = (index) => {
    setActiveAppIndex(index);
    setDefaultClassName(null); // Reset when hovering a new item
  };

  return (
    <section className="service-section">
      <div className="service-section-badge">
        <pre>Build</pre>
        <h1 className="main-heading">Application Development & Modernization</h1>
      </div>
      
      <div className="service-content">
        <div className="service-image">
          {/* <img 
            src={buildservices[activeAppIndex]?.img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          /> */}
          <video autoPlay muted className='services-body-img' src="https://res.cloudinary.com/dra2qc1c7/video/upload/v1768541898/dckorlpbpbjjtyjv6sxx.mp4" alt="services" />
        </div>

        <div className="service-text">
          <div className="service-list">
            {buildservices.map((service, index) => (
              <div 
                key={index} 
                className={`service-item ${(activeAppIndex === index) && (defaultClassName === null) ? 'active' : 'inactive'}`}
                onMouseEnter={() => makeActive(index)}
                onMouseLeave={makeInactive}
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
  );
};

export default ServicesBuild;
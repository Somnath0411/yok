import React, { useState } from 'react';
import FadeContent from '../../assets/FadeContent';
const ServicesIntelligence = (props) => {
  const {intelligenceService}=props
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
        <FadeContent>
          <pre>Intelligence</pre>
        <h2 className="main-heading">Data Analytics & Decision Intelligence</h2>
        </FadeContent>  
      </div>
      <div className="service-content">
        <div className="service-image">
          {/* The key={activeAppIndex} forces the image to re-mount and trigger CSS animations */}
          {/* <img 
            src={intelligenceService[activeAppIndex].img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          /> */}
          <FadeContent>
            <video autoPlay muted className='services-body-img' src="https://res.cloudinary.com/dra2qc1c7/video/upload/v1768541898/dckorlpbpbjjtyjv6sxx.mp4" alt="services" />
          </FadeContent>
        </div>
        <div className="service-text">
          <div className="service-list">
            {intelligenceService.map((service, index) => (
              <FadeContent>
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
            </FadeContent>
            ))}
          </div>
        </div> 
      </div>        
      </section>
 )
}
export default ServicesIntelligence;
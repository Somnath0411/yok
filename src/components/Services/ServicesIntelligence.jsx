import React, { useState } from 'react';
import { motion } from 'framer-motion'
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
    <motion.section className="service-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}>
      <motion.div className="service-section-badge"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true }}>
        <pre>Intelligence</pre>
        <h2 className="main-heading">Data Analytics & Decision Intelligence</h2>
      </motion.div>
      <motion.div className="service-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        viewport={{ once: true }}>
        <div className="service-image">
          {/* The key={activeAppIndex} forces the image to re-mount and trigger CSS animations */}
          {/* <img 
            src={intelligenceService[activeAppIndex].img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          /> */}
          <video autoPlay muted className='services-body-img' src="https://res.cloudinary.com/dra2qc1c7/video/upload/v1768541898/dckorlpbpbjjtyjv6sxx.mp4" alt="services" />
        </div>
        <div className="service-text">
          <div className="service-list">
            {intelligenceService.map((service, index) => (
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
      </motion.div>        
      </motion.section>
 )
}
export default ServicesIntelligence;
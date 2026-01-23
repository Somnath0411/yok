import React, { useState } from 'react';
import { motion } from 'framer-motion'
const ServicesScale = (props) => {
  const {scaleservices}=props
  const [activeCloudIndex, setActiveCloudIndex] = useState(0);
  const [defaultClassName, setDefaultClassName] = useState(null);
    const makeInactive = () => {
    setDefaultClassName('inactive');
  };

  const makeActive = (index) => {
    setActiveCloudIndex(index);
    setDefaultClassName(null); // Reset when hovering a new item
  };
 return (
    <motion.section className="service-section "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}>
      <motion.div className="service-section-badge"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true }}>
        <pre>Scale</pre>
        <h2 className="main-heading">Cloud Infrastructure Services</h2>
      </motion.div>
      <motion.div className='service-content'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.4 }}
        viewport={{ once: true }}>
         <div className="service-text">
          <div className="service-list">
            {scaleservices.map((service, index) => (
              <div 
                key={index} 
                className={`service-item ${(activeCloudIndex=== index) && (defaultClassName === null) ? 'active' : 'inactive'}`}
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
        <div className="service-image service-image-reverse">
          {/* <img 
            src={scaleservices[activeCloudIndex].img} 
            alt="Cloud Illustration" 
            className="fade-in" 
            key={activeCloudIndex} 
          /> */}
          <video autoPlay muted className='services-body-img' src="https://res.cloudinary.com/dra2qc1c7/video/upload/v1768541898/dckorlpbpbjjtyjv6sxx.mp4" alt="services" />
        </div>
      </motion.div>
      </motion.section>
 )
}
export default ServicesScale
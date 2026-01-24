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
    <section className="service-section ">
      <motion.div className="service-section-badge"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}>
        <pre>Scale</pre>
        <h2 className="main-heading">Cloud Infrastructure Services</h2>
      </motion.div>
      <div className='service-content'>
         <motion.div className="service-text" 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}>
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
        </motion.div>
        <motion.div className="service-image service-image-reverse" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}>
          {/* <img 
            src={scaleservices[activeCloudIndex].img} 
            alt="Cloud Illustration" 
            className="fade-in" 
            key={activeCloudIndex} 
          /> */}
          <video autoPlay muted className='services-body-img' src="https://res.cloudinary.com/dra2qc1c7/video/upload/v1768541898/dckorlpbpbjjtyjv6sxx.mp4" alt="services" />
        </motion.div>
      </div>
      </section>
 )
}
export default ServicesScale
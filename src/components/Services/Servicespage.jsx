import React, { useState } from 'react';
import './Servicespage.css';
import AccordionDemo from '../../assets/Accordian';

const ServicesPage = () => {
  // Track which service is open for each section
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeCloudIndex, setActiveCloudIndex] = useState(0);

  const subServices = [
    { 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "/app-dev-1.png" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" },
    { title: "Application Management & Support", description: "24/7 reliability.", img: "/app-dev-5.png" },
    { title: "AI & Automation Integration", description: "Smart workflows.", img: "/app-dev-6.png" }
  ];

  return (
    <div className="services-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Build, manage and scale the technology your business relies on</h1>
          <p className="hero-description">
            We modernize the systems you use every day, making them easier to run.
          </p>
          <button className="btn-primary">Reach Us</button>
        </div>
        <div className="hero-image-placeholder"></div>
      </section>

      {/* 2. Application Development Section */}
      <section className="service-section">
        <div className="service-text">
          <h2 className="section-title">Application Development & Modernization</h2>
          <div className="service-list">
            {subServices.map((service, index) => (
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
            src={subServices[activeAppIndex].img} 
            alt="Service Illustration" 
            className="fade-in" 
            key={activeAppIndex} 
          />
        </div>
      </section>

      {/* 3. Cloud Infrastructure Section (Reverse) */}
      <section className="service-section reverse">
        <div className="service-text">
          <h2 className="section-title">Cloud Infrastructure Services</h2>
          <div className="service-list">
            {subServices.map((service, index) => (
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
            src={subServices[activeCloudIndex].img} 
            alt="Cloud Illustration" 
            className="fade-in" 
            key={activeCloudIndex} 
          />
        </div>
      </section>
      {/* 4. FAQ Section with Accordion */}
      <section className="faq-section">
        <div className='faq-text'/>
          <h1 className="section-title">Still have Questions?<br/>We have answers.</h1>
          <div className='faq-items'><AccordionDemo /></div>
      </section>
    </div>
  );
};
export default ServicesPage;
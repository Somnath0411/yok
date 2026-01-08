import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import './Servicespage.css';
import AccordionDemo from '../../assets/Accordian';
import FadeContent from '../../assets/FadeContent.jsx'
import ServicesBuild from './ServicesBuild'
import ServicesScale from './ServicesScale'
import ServicesIntelligence from './ServicesIntelligence'
import ServicesHero from './ServicesHero'


const ServicesPage = () => {
  // Track which service is open for each section
  const [activeAppIndex, setActiveAppIndex] = useState(0);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash
    }
  }, [hash]); // Runs every time the hash in the URL changes

  const subServices = {
    build:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" },
    { title: "Application Management & Support", description: "24/7 reliability.", img: "/app-dev-5.png" },
    { title: "AI & Automation Integration", description: "Smart workflows.", img: "/app-dev-6.png" } ],

    scale:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" },
    { title: "Application Management & Support", description: "24/7 reliability.", img: "/app-dev-5.png" },
    { title: "AI & Automation Integration", description: "Smart workflows.", img: "/app-dev-6.png" } ],
  
    intelligence:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" },
    { title: "Application Management & Support", description: "24/7 reliability.", img: "/app-dev-5.png" },
    { title: "AI & Automation Integration", description: "Smart workflows.", img: "/app-dev-6.png" } ]
  };

  return (
    <div className="services-container">
      {/* 1. Hero Section */}
      <FadeContent>
        <ServicesHero/>
      </FadeContent>

      {/* 2. Application Development Section */}
      <div id="build-section">
        <ServicesBuild buildservices={subServices.build} />
      </div>
      
      {/* 3. Cloud Infrastructure Section (Reverse) */}
      <div id="scale-section">
         <ServicesScale scaleservices={subServices.scale} />
      </div>
      

      {/* 4. Intelligence Section */}
      <div id="intelligence-section">
        <ServicesIntelligence intelligenceService={subServices.intelligence}/>
      </div>
      

      {/* 5. FAQ Section with Accordion */}
      <section className="faq-section">
        <div className='faq-text'/>
          <h1 className="section-title">Still have Questions?<br/>We have answers.</h1>
          <div className='faq-items'><AccordionDemo /></div>
      </section>
    </div>
  );
};
export default ServicesPage;
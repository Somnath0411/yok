import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import './Servicespage.css';
import AccordionDemo from '../../assets/Accordian';
import FadeContent from '../../assets/FadeContent.jsx'
import ServicesBuild from './ServicesBuild'
import ServicesScale from './ServicesScale'
import ServicesIntelligence from './ServicesIntelligence'
import HeroSection from '../HeroSection.jsx'


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
  
  const heroContent = {
    title:'What your business can rely on',
    content:'We improve the way your core platforms run, making them easier to manage, easier to maintain, and ready to grow with your business.',
    btn:'Reach Us',
    img:'https://static.vecteezy.com/system/resources/previews/035/504/977/non_2x/ai-generated-a-smiling-teacher-in-a-classroom-setting-free-photo.jpg'
  }
  const subServices = {
    build:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" } ],

    scale:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" }],
  
    intelligence:[{ 
        title: "Digital Transformation Consulting", 
        description: "Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Custom Web & Mobile Development", 
        description: "Modern, secure applications built to scale across devices, users, and business needs.",
        img: "/app-dev-2.png" 
    },
    { title: "Legacy System Modernization", description: "Updating old tech.", img: "/app-dev-3.png" },
    { title: "Microservices & API Engineering", description: "Seamless connectivity.", img: "/app-dev-4.png" }]
  };

  return (
    <div className="services-container">
      {/* 1. Hero Section */}
      <FadeContent>
        <HeroSection title={heroContent.title} description={heroContent.content} btncontent={heroContent.btn} imgsrc={heroContent.img} />
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
      <div className="faq-bg">
        <section className="faq-section">
          <h1 className="section-title txt-48">Still have Questions?<br/>We have answers.</h1>
          <div className='faq-items'><AccordionDemo /></div>
      </section>
      </div>
      
    </div>
  );
};
export default ServicesPage;
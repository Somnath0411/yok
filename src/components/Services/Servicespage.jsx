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
        title: "Strategic assessment", 
        description: "We review existing applications and define a clear direction aligned with business priorities and future growth plans.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Application engineering", 
        description: "We design and develop secure, scalable web and mobile applications using modern engineering practices.",
        img: "/app-dev-2.png" 
    },
    { title: "Modernization of existing platforms", 
      description: "We enhance legacy applications to improve performance, security, and maintainability without unnecessary disruption.", 
      img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" },
    { title: "Lifecycle management",
       description: "We provide continuous support, updates, and improvements to ensure applications remain stable and effective over time.", 
       img: "/app-dev-4.png" 
      } 
    ],

    scale:[{ 
        title: "Architecture and governance", 
        description: "We establish cloud architectures and governance models that support security, compliance, and operational clarity.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Migration and modernization", 
        description: "We transition workloads to cloud environments while modernizing infrastructure for improved efficiency and resilience.",
        img: "/app-dev-2.png" 
    },
    { title: "Managed cloud operations", 
      description: "We provide ongoing monitoring, optimization, and maintenance to ensure availability and performance.", 
      img: "/app-dev-3.png" },
    { title: "DevOps and security practices",
       description: "We implement automation, deployment pipelines, and security controls to support reliable and repeatable operations", 
       img: "/app-dev-4.png" }],
  
    intelligence:[{ 
        title: "Data architecture and strategy", 
        description: "We establish structured data foundations aligned with business priorities and growth plans.",
        img: "https://res.cloudinary.com/dra2qc1c7/image/upload/v1767951880/qvnxgm3bqvgbft726ppi.gif" 
    },
    { 
        title: "Data engineering and reliability", 
        description: "We develop and maintain pipelines, lakes, and warehouses that ensure consistent data availability.",
        img: "/app-dev-2.png" 
    },
    { 
      title: "Business intelligence and insights", 
      description: "We deliver dashboards and reporting tools that support both executive and operational decision-making.", 
      img: "/app-dev-3.png" },
    { 
      title: "Advanced analytics and governance", 
      description: "We apply predictive models, governance frameworks, and security controls to protect and maximize data value.", 
      img: "/app-dev-4.png" }]
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
        <FadeContent>
          <h1 className="section-title txt-48">Still have Questions?<br/>We have answers.</h1>
         </FadeContent>
         <div className='faq-items'><AccordionDemo /></div>
      </section>
      </div>
      
    </div>
  );
};
export default ServicesPage;
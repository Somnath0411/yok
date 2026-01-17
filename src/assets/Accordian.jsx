import React, { useState } from 'react';
import './Accordian.css';
const accordionData = [
  {
    id: 'item-1',
    title: 'Digital Transformation Consulting',
    content: 'Assess where you are today and build a clear roadmap to a modern, scalable digital ecosystem.'
  },
  {
    id: 'item-2',
    title: 'Custom Web & Mobile Development',
    content: 'Modern, secure applications built to scale across devices, users, and business needs.'
  },
  {
    id: 'item-3',
    title: 'Legacy System Modernization',
    content: 'Updating old tech.'
  },
  {
    id: 'item-4',
    title: 'Microservices & API Engineering',
    content: 'Seamless connectivity.'
  },
  {
    id: 'item-5',
    title: 'Application Management & Support',
    content: '24/7 reliability.'
  },
  {
    id: 'item-6',
    title: 'AI & Automation Integration',
    content: 'Smart workflows.'
  }
];

export function AccordionDemo() {
  // Set item-1 as open by default
  const [openItem, setOpenItem] = useState('item-1');

  const toggleItem = (id) => {
    // If you click the open one, it closes (collapsible), otherwise open the new one
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item) => (
        <div key={item.id} className="accordion-item">
          <button 
            className={`accordion-trigger  ${openItem === item.id ? 'active' : ''}`}
            onClick={() => toggleItem(item.id)}
            onMouseEnter={() => toggleItem(item.id)}
            onMouseLeave={() => toggleItem(item.id)}
          >
            <p className='faq-question txt-23'>
              {item.title}
            </p>
            <span className="chevron"></span>
          </button>
          
          <div className={`accordion-content ${openItem === item.id ? 'open' : ''}`}>
            <div className="content-inner txt-16">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionDemo;
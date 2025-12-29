import React, { Component } from 'react'

const l1={'build':{heading:'Application Development & Modernization',
  p1:"Design and develop modern,cloud-native applications",
  p2:"Transform legacy systems into scalable, high-performance platforms",
  p3:"Deliver secure, reliable engineering built for growth"
},'scale':{},'intelligence':{}}
class Services extends Component{
  state={

  }
  render(){  
    return (
    <section className="services container">
      <div className="services-top">
        <h2>The platform for smarter<br/>scalable transformation</h2>
      </div>
      <div className="services-row">
       <button className='service-btn'>Build</button>
       <button className='service-btn'>Scale</button>
       <button className='service-btn'>Intelligence</button>
      </div>
      <div className='services-body'>
        <img className='services-body-img'src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&auto=format&fit=crop" alt="services" />
        <div className='services-body-description'>
          <h2>
            {l1.build.heading}
          </h2>
          <ul className='description-list'>
           <li className='description-list-item'>{l1.build.p1}</li>
           <li className='description-list-item'>{l1.build.p2}</li>
           <li className='description-list-item'>{l1.build.p3}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
}
export default Services;

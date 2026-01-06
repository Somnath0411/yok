import React, { Component } from 'react'
import ServiceButton from './servicebtns'
import FadeContent from '../../assets/FadeContent.jsx'

const l1={'build':{heading:'Application Development & Modernization',
  p1:"Design and develop modern,cloud-native applications",
  p2:"Transform legacy systems into scalable, high-performance platforms",
  p3:"Deliver secure, reliable engineering built for growth"
},'scale':{heading:'scale',
  p1:"scale",
  p2:"scale",
  p3:"scale"
},'intelligence':{heading:'intelligence',
  p1:"intelligence",
  p2:"intelligence",
  p3:"intelligence"
}}
class Services extends Component{
  state={
    active:'build',
    number:1
  }
  componentDidMount(){
    this.timerId=setInterval(this.setTimer,5000)
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  setTimer = () =>{
    const {number}=this.state
    if(number>3){
      this.setState({number:1})
    }
    else{
       this.setState((prevstate)=>({number:prevstate.number+1}))
    }
    if (number===1){
       this.setState({active:"build"})
    }
    else if(number===2){
       this.setState({active:"scale"})
    }
    else if(number===3){
       this.setState({active:"intelligence"})
    }
  }
  onclickBuild = () => {
    this.setState({active:"build",number:1})
  }
  onclickScale = () => {
    this.setState({active:"scale",number:2})
  }
  onclickIntelligence = () => {
    this.setState({active:"intelligence",number:3})
  }
  render(){ 
    const {active}=this.state; 
    return (
    <section className="services">
      <FadeContent threshold={0.3} delay={0.2}>
        <div className="services-top">
          <h2>The platform for smarter<br/>scalable transformation</h2>
        </div>
      </FadeContent>
      <FadeContent threshold={0.3} delay={0.2}>
        <div className="services-row">
          <ServiceButton  isactive={active==="build"} name="Build" btnfunction={this.onclickBuild}/>
          <ServiceButton  isactive={active==="scale"} name="Scale" btnfunction={this.onclickScale}/>
          <ServiceButton  isactive={active==="intelligence"} name="Intelligence" btnfunction={this.onclickIntelligence}/>
        </div>
      </FadeContent>
      <div className='services-body'>
        <FadeContent threshold={0.3} delay={0.1}>
          <img className='services-body-img'src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&auto=format&fit=crop" alt="services" />
        </FadeContent>
          <div className='services-body-description'>
            <FadeContent threshold={0.3} delay={0.1}>
            { active==='build' && <h2>
              {l1.build.heading}
            </h2>}
            { active==='scale' && <h2>
              {l1.scale.heading}
            </h2>}
            { active==='intelligence' && <h2>
              {l1.intelligence.heading}
            </h2>}
            </FadeContent>
            <FadeContent threshold={0.3} delay={0.1}>
            { active==='build' &&
            <ul className='description-list'>
            <li className='description-list-item'>{l1.build.p1}</li>
            <li className='description-list-item'>{l1.build.p2}</li>
            <li className='description-list-item'>{l1.build.p3}</li>
            </ul>
            }
            { active==='scale' &&
            <ul className='description-list'>
            <li className='description-list-item'>{l1.scale.p1}</li>
            <li className='description-list-item'>{l1.scale.p2}</li>
            <li className='description-list-item'>{l1.scale.p3}</li>
            </ul>
            }
            { active==='intelligence' &&
            <ul className='description-list'>
            <li className='description-list-item'>{l1.intelligence.p1}</li>
            <li className='description-list-item'>{l1.intelligence.p2}</li>
            <li className='description-list-item'>{l1.intelligence.p3}</li>
            </ul>
            }
            </FadeContent>
          </div>
      </div>
    </section>
  )
}
}
export default Services;
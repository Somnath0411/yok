import HeroSection from '../HeroSection.jsx'
import OpeningSection from './OpeningSection'
import ApplySection from './ApplySection'

const Careers = () => {
   const heroContent = {
    title:'Join Us. Be Curious!',
    content:'We’re building a team that enjoys solving real problems and working on technology that matters.',
    btn:'Explore Jobs',
    img:'https://static.vecteezy.com/system/resources/previews/035/504/977/non_2x/ai-generated-a-smiling-teacher-in-a-classroom-setting-free-photo.jpg'
  }
   return(
    <div className="careers-section">
        <HeroSection title={heroContent.title} description={heroContent.content} btncontent={heroContent.btn} imgsrc={heroContent.img}/>
        <OpeningSection/>
        <ApplySection/>
    <div className='spacer-100'>

    </div>
    </div>
   )
}
export default Careers;
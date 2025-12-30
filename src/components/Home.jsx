import Hero from './Hero'
import Brands from './Brands'
import Services from './Services'
import WhyChoose from './WhyChoose'
import FadeContent from '../assets/FadeContent.jsx'

const Home = () =>{
    return(
        <div>
          <FadeContent><Hero /></FadeContent>
          <FadeContent threshold={0.3} delay={0.2}><Brands /></FadeContent>
          <FadeContent threshold={0.3}><Services /></FadeContent>
          <FadeContent threshold={0.3}><WhyChoose /></FadeContent>  
        </div>
    )
}
export default Home;
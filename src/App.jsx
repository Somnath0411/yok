import './App.css'
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Home from './components/Home'
import Footer from './components/Footer/Footer.jsx'
import Servicespage from './components/Services/Servicespage'
import NotFound from './components/NotFound'
import FadeContent from './assets/FadeContent.jsx'
import Careers from './components/Careers/Careers.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'


const App = () => {
  return (
      <div className="site-root">
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Servicespage/>}/>
            <Route path="/Careers" element={<Careers/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            {/* <Route path="/services/build" element={<ServicesBuild/>}/> */}
            <Route path="*" element={<NotFound/>}/>

          </Routes>
        <Footer />
      </div>
  )
}

export default App

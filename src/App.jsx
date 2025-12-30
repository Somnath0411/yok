import './App.css'
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Servicespage from './components/Services/Servicespage'
import NotFound from './components/NotFound'
import FadeContent from './assets/FadeContent.jsx'


const App = () => {
  return (
      <div className="site-root">
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Servicespage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <FadeContent><Footer /></FadeContent>
      </div>
  )
}

export default App

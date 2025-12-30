import './App.css'
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Servicespage from './components/Servicespage'
import NotFound from './components/NotFound'


const App = () => {
  return (
      <div className="site-root">
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Servicespage/>}/>
            <Route element={<NotFound/>}/>
          </Routes>
        <Footer />
      </div>
  )
}

export default App

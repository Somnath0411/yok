import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-root">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  )
}

export default App

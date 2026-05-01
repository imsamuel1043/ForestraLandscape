import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Homepage/Home';
import About from './Components/Aboutpage/About';
import Footer from './Components/Footer';
import Services from './Components/Servicespage/Services';
import ScrollToTop from './Components/ScrollToTop';
import Collections from './Components/Collectionspage/Collections';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/collection" element={<Collections/>} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App
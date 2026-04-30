import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Navbar from './Components/Navbar'
import Home from './Components/Homepage/Home';
import About from './Components/Aboutpage/About';
import Footer from './Components/Footer';
import Services from './Components/Servicespage/Services';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />

      </Routes>

      <Footer />
    </Router>
  )
}

export default App
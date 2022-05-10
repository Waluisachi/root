import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact';

import Home from './screens/Home';
import About from './screens/About';
import Footer from './components/Footer';
import ComingSoon from './screens/ComingSoon';
import Licensing from './screens/Licensing';
import Pricing from './screens/Pricing';



function App() {
  return (
    <div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/services" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/pricing" element={ <Pricing />} />
        <Route path="/licensing" element={ <Licensing />} />
        <Route path="/contacts" element={ <Contact />} />
        <Route path="/*" element={ <ComingSoon />} />

      </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  )
}

export default App

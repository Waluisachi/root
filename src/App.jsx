import { useState } from 'react'
import Navbar from './components/Navbar';
import Card from './components/card';
import Footer from './components/Footer';
import Contact from './components/Contact';
import  { iot, web3, software} from './components/data';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Card {...software}/>
    <Card {...web3}/>
    <Card {...iot}/>
    <Contact />
    <Footer />
    </div>
  )
}

export default App

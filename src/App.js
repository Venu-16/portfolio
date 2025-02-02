import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
   <>
   <Header />
   <main className='main'>
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
   </main>
   </> 
  )
}

export default App

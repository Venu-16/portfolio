import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Projects from './components/projects/Portfolio';
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
    <Projects />
    <Contact />
    <Footer />
   </main>
   </> 
  )
}

export default App

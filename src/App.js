import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Parallax from './components/parallax/Parallax';
import Planes from './components/planes/Planes';
import ScrollUp from './components/scrollup/ScrollUp';
import "./App.css";

function App() {

  return (
    <div>
      <Navbar />
    <main className='main'>
      <Header />
    <About />
    <Parallax />
    <Planes />
    <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </div>
  );
}

export default App;

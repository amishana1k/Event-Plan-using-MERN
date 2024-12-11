import React from 'react'
import "./App.css"
import {BrowserRouter} from "react-router-dom"
import NavBar from "./components/NavBar"
import Contact from "./components/Contact"
import Services from "./components/Services"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import About from "./components/About"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App

import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/best" element={<Best />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </>
  );
}

export default App;

import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Featured />
        {/* <Signup /> */}
        <Footer />
    </div>
  )
}

export default Home
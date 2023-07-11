import React from 'react'
import Intro from "../components/Intro";
import About from "../components/about";
import Works from "../components/works";
import Contact from "../components/contact"
export default function Home () {
  return (
    <div>
     <Intro/>
     <About/>
     <Works/>
     <Contact/>
    </div>
  )
}

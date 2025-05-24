import React from 'react'
import {About} from "../component/sections/about"

import {Contact} from "../component/sections/contact"

import {Hero} from "../component/sections/hero"

import {Testimonial} from "../component/sections/testimonial"

const Home = () => {
  return (
   <>
    <Hero/>
    <About/>
    <Testimonial/>
    <Contact/>
   </>
  )
}

export default Home
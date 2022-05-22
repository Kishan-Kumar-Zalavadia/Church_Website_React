import React from 'react'
import AboutUsContent from '../SubComponents/AboutContent/AboutUsContent'
import Footer from '../SubComponents/Footor/Footer'
import Navbar from '../SubComponents/Navbar/Navbar'
const AboutUs = () => {
  return (
    <>
      <Navbar us="active"/>
      <AboutUsContent/>
      <Footer/>
    </>
  )
}

export default AboutUs
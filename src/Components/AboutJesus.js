import React from 'react'
import AboutJesusContent from '../SubComponents/AboutContent/AboutJesusContent'
import Footer from '../SubComponents/Footor/Footer'
import Navbar from '../SubComponents/Navbar/Navbar'
const AboutJesus = () => {
  return (
    <>
      <Navbar jesus="active"/>
      <AboutJesusContent/>
      <Footer/>
    </>
  )
}

export default AboutJesus
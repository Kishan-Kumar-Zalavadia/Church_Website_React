import React from 'react'
import ContactContent from '../SubComponents/ContactContent/ContactContent'
import Footer from '../SubComponents/Footor/Footer'
import Navbar from '../SubComponents/Navbar/Navbar'

const Contact = () => {
  return (
    <>
      <Navbar contact="active"/>
      <ContactContent/>
      <Footer/>
    </>
  )
}

export default Contact
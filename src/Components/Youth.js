import React from 'react'
import Navbar from '../SubComponents/Navbar/Navbar'
import YouthContent from '../SubComponents/Ministries/YouthContent'
import Footer from '../SubComponents/Footor/Footer'

const Youth = () => {
  return (
      <>
        <Navbar youth="active" ministry="active"/>
        <YouthContent/>
        <Footer/>
      </>
  )
}

export default Youth
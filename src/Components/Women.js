import React from 'react'
import Navbar from '../SubComponents/Navbar/Navbar'
import WomenContent from '../SubComponents/Ministries/WomenContent'
import Footer from '../SubComponents/Footor/Footer'

const Women = () => {
  return (
    <>
        <Navbar women="active" ministry="active"/>
        <WomenContent/>
        <Footer/>
      </>
  )
}

export default Women
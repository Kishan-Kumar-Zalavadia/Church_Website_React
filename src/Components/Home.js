import React from 'react'
import Navbar from '../SubComponents/Navbar/Navbar'
import HomeContent from '../SubComponents/HomeContent/HomeContent'
import Service from '../SubComponents/Service/Service'
import Pastor from '../SubComponents/Members/Pastor'
import Office from '../SubComponents/Members/Office'
import Footer from '../SubComponents/Footor/Footer'
import { useState } from "react";



function Home() {
  return (
      <div>
          <Navbar home="active"/>
          <HomeContent/>
          <Service/>
          <Pastor/>
          {/* <Office/> */}
          <Footer/>
      </div>
    
  )
}

export default Home
import React from 'react'
import './Pastor.css'
import P1 from '../images/Dr. Boda Solomon.jpg'
import P2 from '../images/Pravin.jpg'

function Office() {
  return (
    <section className="teams" id="teams" style={{backgroundColor: 'rgb(230, 230, 230)'}}>
        <div className="max-width">
          <div className="title"><h2>EC Members</h2></div>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src={P1} alt="" srcSet />
                <div className="text">Rev. Dr. Boda Solomon</div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae.</p> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={P2} alt="" srcSet />
                <div className="text">Rev. Pravin Kumar</div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Office
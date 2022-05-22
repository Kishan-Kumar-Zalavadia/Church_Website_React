import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'
import Service_data from './ServiceData'

function Service() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <div className="title"><h2>Weekly Programs</h2></div>

        <div className="serv-content">
        {Service_data.map((value) => {
              return <div className="card">
              <div className="box">
                <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
                <div className="text">{value.name}</div>
                <div>{value.day}</div><br />
                <p>{value.time}</p>
                <br />
              </div>
            </div>
            })}
        </div>
      </div>
    </section>
  )
}

export default Service
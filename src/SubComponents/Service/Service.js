import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'


function Service() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <div className="title"><h2>Weekly Programs</h2></div>
        <div className="serv-content">
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Sunday Worship Service</div>
              <div>1st Service</div><br />
              <p>8:00 am - 9:30 am</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Sunday Worship Service</div>
              <div>2nd Service</div><br />
              <p>10:00 am - 12:30 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Sunday School</div>
              <div>Sunday</div><br />
              <p>8:00 am - 9:30 am <br/><br/> 10:30am - 12:30 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Sick visit</div>
              <div>Sunday</div><br />
              <p>4:00 pm - 7:30 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Youth Fellowship</div>
              <div>Sunday</div><br />
              <p>6 pm - 8 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Women Fellowship</div>
              <div>Tuesday</div><br />
              <p>6:30 pm - 8:00 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Fasting Prayer</div>
              <div>Friday</div><br />
              <p>11:00 am - 3:00 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Church Prayer</div>
              <div>Friday</div><br />
              <p>6:30 pm - 8:00 pm</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">All Night Prayer</div>
              <div>Every Month 2nd Friday</div><br />
              <p>10:00 pm - 5:00 am</p>
              <br />
            </div>
          </div>
          <div className="card">
            <div className="box">
              <FontAwesomeIcon icon={faPrayingHands} id='prayerHand'></FontAwesomeIcon>
              <div className="text">Bible Study</div>
              <p>6:30 pm - 8:00 pm</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
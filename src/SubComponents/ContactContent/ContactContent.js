import React from 'react'
import './ContactContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Contactaaa = styled(NavLink)``

const ContactContent = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <div className="title"><h2>Contact Us</h2></div>
                <div className="contact-content">
                    <br />
                    <div className="icons">
                        <div className="crow crow-address">
                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.google.com/maps/place/Baptist+Church+Dilsukhnagar/@17.3699876,78.5203705,17z/data=!4m5!3m4!1s0x3bcb98f7dda424e9:0xe6f0ece215fbeb86!8m2!3d17.370181!4d78.5213416" }}><FontAwesomeIcon icon={faLocation} className="socialIcons"></FontAwesomeIcon></NavLink>

                            <br />
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title addres">16-11-477/6/2/1, Shashi Hospital Lane, Moosarambagh,
                                    Dilsukhnagar, Hyderabad, Telangana, India 500036</div>
                            </div>
                        </div>
                        <br />
                        <div className="crow crow-phonemail">
                            <div className="info">
                                <div className="crow">
                                    <FontAwesomeIcon icon={faPhone} className="socialIcons" ></FontAwesomeIcon>

                                    <div className="info">
                                        <div className="head">Phone</div>
                                        <div className="sub-title">7702 826 454</div>
                                        <div className="sub-title">9885 182 781</div>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div className="crow">
                                    <Contactaaa target="_blank" to={{ pathname: "mailto:bcdsnr@gmail.com" }}><FontAwesomeIcon icon={faEnvelope} className="socialIcons"></FontAwesomeIcon></Contactaaa>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">bcdsnr@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <a target="_blank" href="https://www.facebook.com/bcdsnr"><i className="fab fa-envelope-f" id="email" /></a>
                        <div className="text">Follow us : <span style={{ color: 'rgb(255, 183, 0)' }}>bcdsnr</span></div>
                        <div className="crow crow-social">

                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.facebook.com/bcdsnr" }}><FontAwesomeIcon icon={faFacebook} className="socialIcons" /></NavLink>
                            <a target="_blank" href="https://www.facebook.com/bcdsnr"><i className="fab fa-facebook-f" id="facebook" /></a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.youtube.com/channel/UC20tWovQ8C_hC3owgif-5Mg" }}><FontAwesomeIcon icon={faYoutube} className="socialIcons" /></NavLink>
                            <a target="_blank" href="https://www.youtube.com/channel/UC20tWovQ8C_hC3owgif-5Mg"><i className="fab fa-youtube" id="youtube" /></a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://www.instagram.com/bcdsnr/" }}><FontAwesomeIcon icon={faInstagram} className="socialIcons" /></NavLink>
                            <a target="_blank" href="https://www.instagram.com/bcdsnr/"><i className="fab fa-instagram" id="instagram" /></a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://twitter.com/bcdsnr" }}><FontAwesomeIcon icon={faTwitter} className="socialIcons" /></NavLink>
                            <a target="_blank" href="https://twitter.com/bcdsnr"><i className="fab fa-twitter" id="twitter" /></a>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://api.whatsapp.com/send?phone=919849743843&app=facebook&entry_point=page_cta&fbclid=IwAR05LhNvYCjNn96ODkleeWaSZbxOCUwvJnNmq3o_qZo7sstwhhoWodfY8G8" }}><FontAwesomeIcon icon={faWhatsapp} className="socialIcons" /></NavLink>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=919849743843&app=facebook&entry_point=page_cta&fbclid=IwAR05LhNvYCjNn96ODkleeWaSZbxOCUwvJnNmq3o_qZo7sstwhhoWodfY8G8"><i className="fab fa-whatsapp" id="whatsapp" /> </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactContent
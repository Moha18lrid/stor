import React from 'react'
import './footer.css'
import logo from '../asset/logo.png'
import linkedin from '../asset/linkedin.png'
import insgram from '../asset/instagram_icon.png'
import whatsapp from '../asset/whatsapp_icon.png'
function Footer() {
    return (
        <div className='footer'>

            <div className="footer_first">
                <img src={logo} alt="" />
                <div className="news_email">

                    <h4>Get Exclusive Offers On Your Email</h4>

                    <div className="footer_main">
                        <input type="text" placeholder='Enter your email'/>
                        <button>submit</button>
                    </div>
                </div>
            </div>

            <ul>
                <li>About Us</li>
                <li>More Project</li>
                <li>My Resume</li>
                <li>15% off</li>
            </ul>
            <div className="contact_us">
                <a href=""> <img src={linkedin} alt="" /></a>
                <a href=""> <img src={insgram} alt="" /></a>
                <a href=""> <img src={whatsapp} alt="" /></a>
            </div>

            <div className="copyright">
                <hr />
                <h4>&copy; Copyright@2024 - all Right Reserved</h4>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
        <p>SHOPPERS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-social-icon-container">
          <img src={instagram_icon} alt="Instagram Icon" />
        </div>
        <div className="footer-social-icon-container">
          <img src={pinterest_icon} alt="Pinterest Icon" />
        </div>
        <div className="footer-social-icon-container">
          <img src={whatsapp_icon} alt="WhatsApp Icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All right Reserved</p>
      </div>
    </div>
  )
}

export default Footer

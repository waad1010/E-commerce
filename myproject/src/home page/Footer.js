import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faFacebook  , faTwitter , faInstagram , faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (

    <footer class="site-footer">
    <div class="containerf">
      <div class="rowf">
        <div class="col-6f">
          <h6>About</h6>
          <p class="text-justify"><i> ESTARTA </i>
          is a global Network Engineering and Information Technology company, specialized in comprehensive outsourced technical and premium service solutions. Throughout our 31​ ​​years of operation, we have delivered expertise to clients through a wide range of services which have supported our clients' success. We are headquartered in Jordan and operate in multiple markets throughout the Middle East and Europe, providing services in 10 different languages. 
          </p>
        </div>

        <div class=" col-3f">
          <h6>  News &amp; Events</h6>
          <ul class="footer-links">
            <li><a href="http://scanfcode.com/category/c-language/">New category ?, Checkout now!</a></li>
            <li><a href="http://scanfcode.com/category/front-end-development/">Big discount coming</a></li>
            <li><a href="http://scanfcode.com/category/back-end-development/">New countries are to be added</a></li>
        
          </ul>
        </div>

        <div class="col-3f">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><a href="https://www.estartasolutions.com/Pages/About.aspx">About Us</a></li>
            <li><a href="https://www.estartasolutions.com/Pages/ContactUs.aspx">Contact Us</a></li>
            <li><a href="https://www.estartasolutions.com/Pages/Services.aspx">Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="https://www.estartasolutions.com/Pages/default.aspx">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div class="containerf">
      <div class="rowf">
        <div class="col-8f">
          <p class="copyright-text">Copyright © Anas &amp; Waad Shop 2022, Inc. All rights reserved.
            
          </p>
        </div>

        <div class="col-3f">
          <ul class="social-icons">
            <li><a  class="facebook" href="https://www.facebook.com/login/"><FontAwesomeIcon icon={faFacebook}  /></a></li>
            <li><a class="twitter" href="https://twitter.com/i/flow/login"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a class="dribbble" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}  /></a> </li>
            <li><a class="linkedin" href="https://www.linkedin.com/company/login"><FontAwesomeIcon icon={faLinkedinIn}  /></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>


    // <footer>
     
    //       <div className="footing">Copyright &copy; Anas &amp; Waad Shop</div>
        
    // </footer>
  );
};
export default Footer;
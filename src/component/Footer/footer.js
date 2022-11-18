import React from "react";
import "./footer.css";
import logo1 from '../../assets/image/footer logo.png';
import apstore from '../../assets/image/app store.png';
import plstore from '../../assets/image/play store.png';
import glo from '../../assets/image/globe (1).png';
import flag from '../../assets/image/uk flag.png';
import self from '../../assets/image/person.png';

const footer = () => {
    return(
    <footer className="main-bid">
    <div className="bid-top"></div>
        <div className="bid">

           <div className="top-col">
              <div className="left-col">
              <img src={logo1} alt="logo" className="logo" />
              <ul className="foot-row">
                 <li className="about">About Us</li>
                 <li>Careers</li>
                 <li>Weather News</li>
                 <li>Weathery Business</li>
                 <li>FAQs</li>
                 <li>Contact Us</li>
              </ul>
              </div>
              <div className="right-col">
                  <h3 className="down">Download the mobile App</h3>
                  <div className="but">
                  <img src={apstore} alt="app store" className="ap" />
                  <img src={plstore} alt="play store" className="ps" />
                  </div>
              </div>
           </div>
           <hr />
           <div className="down-col">
               <p className="copyright">© 2022 Weathery, All rights reserved to Team Gear</p>
               <div className="cop-left">
                <div className="ic"><img src={glo} alt="globe" className="globe"/><p className="para">English</p></div>
                <div className="ic"><img src={flag} alt="flag" className="flag" /><p className="para">United Kingdom</p></div>
                <div className="ic"><img src={self} alt="self" className="self" /><p className="para">Customer Support</p></div>
               </div>
           </div>
        </div>
    </footer>
    )
}
export default footer;
import React from 'react'
//*-------------------------------------- 
import "../css/Subscription.css"
//*-------------------------------------- 
function Subscription() {
    return (
        <div>
            <div className="subscription-container">
        <div className="add-email-container">
          <h1>Do you want to get our latest updates?</h1>
          <p>
            Please subscribe our newsletter for upcoming new videos and latest
            information about our work. Thank you.
          </p>
          <div className="email">
            <input type="email" name="email" placeholder="Your Email..." />
            <span>
              <button>Subscribe</button>
            </span>
          </div>
        </div>
        <div className="our-terms-container">
          <div className="quick-links-container">
            <h1>Quick Links</h1>
            <button>Duis bibendum</button>
            <button>Purus non dignissim</button>
            <button>Sapien metus gravida</button>
            <button>Eget consequat</button>
            <button>Praesent eu pulvinar</button>
          </div>
          <div className="our-pages-container">
            <h1>Our Pages</h1>
            <button>Our Videos</button>
            <button>License Terms</button>
            <button>About Us</button>
            <button>Contact</button>
            <button>Privacy Policies</button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Subscription

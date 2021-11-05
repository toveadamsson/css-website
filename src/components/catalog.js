import React from "react";
import SingleItem from "./SingleItem";
import '../css/Categories.css'
import '../css/Subscribe.css'


function Catalog() {
  return (
    <div className="catalog-container">
      <div className="title-catagories-section">
        <h1>Our Photo Catalog</h1>
        <div className="span-container">
          <p>Categories:</p>
          <ul className="demo">
            <li>All</li>
            <li>Nature</li>
            <li>Actions</li>
            <li>Featured</li>
          </ul>
        </div>
      </div>
      <div className="test-test">
        <SingleItem />
      </div>
      <div className="page-buttons-selector">
        <span>
          <button>1</button>
        </span>
        <span>
          <button>2</button>
        </span>
        <span>
          <button>3</button>
        </span>
        <span>
          <button>4</button>
        </span>
      </div>
      <div className="subscription-container">
        <div className="add-email">
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
        <div className="prov">
          <div className="quick-links">
            <h1>Quick Links</h1>
            <button>Duis bibendum</button>
            <button>Purus non dignissim</button>
            <button>Sapien metus gravida</button>
            <button>Eget consequat</button>
            <button>Praesent eu pulvinar</button>
          </div>
          <div className="our-pages">
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
  );
}

export default Catalog;

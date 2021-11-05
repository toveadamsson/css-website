import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import "../css/Intro.css"

function Intro() {
  return (
    <div className="intro-container">
      <div className="background-image">
        <div className="header">
          <h1>
            CSS<br /> website
          </h1>
          <div className="navbar">
            <Link to="/">
              {/* to="/videos" */}
              <button>Videos</button>
            </Link>
            <Link to="/">
              {/* to="/photos" */}
              <button>Photos</button>
            </Link>
            <Link to="/">
              {/* to="/contact" */}
              <button>Contact</button>
            </Link>
          </div>
        </div>
        <div className="intro-button-container">
          {/* <h1>Front page</h1> */}
          <div className="c--anim-btn">
            <span className="c-anim-btn">Discover more...</span>
            <span>
            <FaAngleDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

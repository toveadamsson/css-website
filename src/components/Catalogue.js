import React from "react";
//*-------------------------------------- 
import SingleItem from "./SingleItem";
import Subscription from "./Subscription"
//*-------------------------------------- 
import '../css/Catalouge.css'
//*-------------------------------------- 

function Catalogue() {
  return (
    <div className="catalogue-container">
      <div className="titles-container">
        <h1>Our Photo Catalog</h1>
        <div className="subtitle-container">
          <p>Categories:</p>
          <ul className="demo">
            <li>All</li>
            <li>Nature</li>
            <li>Actions</li>
            <li>Featured</li>
          </ul>
        </div>
      </div>
      <div className="single-item-div">
        <SingleItem />
      </div>
      <div className="page-buttons-container">
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
      <Subscription />
    </div>
  );
}

export default Catalogue;

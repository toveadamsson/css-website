import React from "react";
import SingleItem from "./single-item";
function Catalog() {
  return (
    <div className="catalog-container">
      <div className="title-catagories-section">
        <h1>Our Photo Catalog</h1>
        <div className="span-container">
          <p>Categories:</p>
          {/* <span>Categories:</span>
        <span className="category">All</span>
        <span className="category">Drone shots</span>
        <span className="category">Nature</span>
        <span className="category">Actions</span>
        <span className="category">Featured</span> */}
          <ul className="demo">
            
            <li>All</li>
            <li>Drone shots</li>
            <li>Nature</li>
            <li>Coffee</li>
            <li>Actions</li>
            <li>Featured</li>
          </ul>
        </div>
      </div>
      <div>
        <SingleItem />
        <SingleItem />
      </div>
    </div>
  );
}

export default Catalog;

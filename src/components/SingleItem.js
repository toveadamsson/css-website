import React from "react";
import PictureOne from "../images/first.webp";
import PictureTwo from "../images/IMG_1144.webp";
import PictureThree from "../images/IMG_1075.webp";
import PictureFour from "../images/IMG_1091.webp";
import PictureFive from "../images/IMG_0089.webp";
import PictureSix from "../images/IMG_0559.webp";
import "../css/SingleItem.css"

function SingleItem() {
  return (
    <div className="different-selection">
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureOne}
            alt="moon showing reflection in water"
          ></img>
        </div>
        <h1>Aenean aliquet sapien</h1>
        <p>
          Video thumbnail has a link to another HTML page. Categories do not
          need any JS. They are just separated HTML pages. Paging is at the
          bottom to extend the list as long as you want. This can be a large
          catalog.
        </p>
      </div>
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureTwo}
            alt="view from balcony of moon rising"
          ></img>
        </div>
        <h1>Mauris in odio vel odio</h1>
        <p>
          You may need TemplateMo for a quick chat or send an email if you have
          any question about this CSS template. font-family: 'Source Sans Pro',
          sans-serif; for this template.
        </p>
      </div>
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureThree}
            alt="sunrise in barcelona"
          ></img>{" "}
        </div>
        <h1>Sagittis sodales enim</h1>
        <p>
          You are allowed to use this video catalog for your business websites.
          Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam,
          sed faucibus lorem sed
        </p>
      </div>
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureFour}
            alt="rough cliff nature in sweden"
          ></img>
        </div>
        <h1>Aenean aliquet sapien</h1>
        <p>
          Video thumbnail has a link to another HTML page. Categories do not
          need any JS. They are just separated HTML pages. Paging is at the
          bottom to extend the list as long as you want. This can be a large
          catalog.
        </p>
      </div>
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureFive}
            alt="hike next to water in spain"
          ></img>
        </div>
        <h1>Mauris in odio vel odio</h1>
        <p>
          You may need TemplateMo for a quick chat or send an email if you have
          any question about this CSS template. font-family: 'Source Sans Pro',
          sans-serif; for this template.
        </p>
      </div>
      <div className="individual-container">
        <div className="image-container">
          <img
            src={PictureSix}
            alt="sunrise in rocky mountains"
          ></img>
        </div>
        <h1>Sagittis sodales enim</h1>
        <p>
          You are allowed to use this video catalog for your business websites.
          Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam,
          sed faucibus lorem sed
        </p>
      </div>
    </div>
  );
}

export default SingleItem;

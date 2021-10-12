import React from "react";
import bigLeaf from "../images/green-leaves-nature-background-wallpaper.jpg"
function SingleItem() {
  return (
      <div className="different-selection">
          <div className="individual-container">
             <div className="image-container">
                  <img src={bigLeaf} alt="big leaf"></img>
                 </div>
              <h1>Aenean aliquet sapien</h1>
              <p>Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.</p>
          </div>
          <div className="individual-container">
          <div className="image-container"><img src="https://www.hdnicewallpapers.com/Walls/Big/Nature%20and%20Landscape/Beautiful_Nature_Background_Wallpapers.jpg" alt="big leaf"></img> </div>
              <h1>Mauris in odio vel odio
</h1>
              <p>You may need TemplateMo for a quick chat or send an email if you have any question about this CSS template. font-family: 'Source Sans Pro', sans-serif; for this template.</p>
          </div>
          <div className="individual-container">
          <div className="image-container"><img src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="big leaf"></img> </div>
              <h1>Sagittis sodales enim</h1>
              <p>You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed</p>
          </div>
      </div>

  );
}

export default SingleItem;


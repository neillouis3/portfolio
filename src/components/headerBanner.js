import React from "react";
import Typed from "react-typed";
import "./headerBanner.css";


function HeaderBanner() {

  return (
    <div className="bannerContainer">
      <div className="waveContainer"></div>

      <div className="textContainer">
        <h1>
          <Typed
            className="bannerText"
            strings={[
              "Hi there, I'm Neil Louise",
              "Have you tried dragging the boxes?",
              "Have you tried resizing the boxes?",
              "You can reset the layout on the lower right corner.",
            ]}
            typeSpeed={40}
            loop
          />
        </h1>
      </div>
    </div>
  );
}

export default HeaderBanner;

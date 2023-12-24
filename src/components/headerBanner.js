import React from "react";
import Typed from "react-typed";



function HeaderBanner() {

  return (
    <div class="containr">
      <div class="waveContainer"></div>

      <div class="textContainer">
        <h1>
          <Typed
            class="bannerText"
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

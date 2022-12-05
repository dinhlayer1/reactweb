import React from "react";
import Common from "./Common";
import web from "../WebAnimate/images/hero-img.svg"

function Home() {
  return (
    <>
      <Common               
            name='Grow your business with'
            imgsrc={web}
            visit='/service'
            btname='Get Started'                    
        />
    </>
  );
}

export default Home;

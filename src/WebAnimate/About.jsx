import React from "react";
import Common from "./Common";
import web from "./images/hero-img.svg";

function About() {
    return(
        <>
            <Common               
                name='Welcom to About page'
                imgsrc={web}
                visit='/contact'
                btname='Contact Now'                    
            />
        </>
    )
}

export default About;
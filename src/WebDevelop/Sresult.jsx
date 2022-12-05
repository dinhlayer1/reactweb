import React from "react";

function Sresult(props) {

    const img = `https://source.unsplash.com/600x400/?${props.name}`
    return(
        <>
            <div className="img__div">
                <img src={img} alt="search"></img>
            </div>
        </>
    )
}

export default Sresult;
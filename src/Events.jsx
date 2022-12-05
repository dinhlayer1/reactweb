import React, {useState} from "react";

function Events() {

    const purple = '#10A19D';
    const [bg, setBg] = useState(purple);
    const bgChange = () => {
        let newBg = '#00FFF6';
        setBg(newBg);
    }
    return(
        <>
            <div style={{backgroundColor: bg}}>
                <button onClick={bgChange} className="click__me">Click Me</button>
            </div>
        </>
    )
}

export default Events;
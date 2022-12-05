import React, {useState} from "react";

function Time() {
    let newTime = new Date().toLocaleTimeString();
    const[ctime, setCtime] = useState(newTime);
    const updateTime = () => {
        let newCtime = new Date().toLocaleTimeString();
        setCtime(newCtime);
    }
    return (
        <>
            <h2 className="time">{ctime}</h2>
            <button onClick={updateTime} className="get__time">Get Time</button>
        </>
    )
}

export default Time;
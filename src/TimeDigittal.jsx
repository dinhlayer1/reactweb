import React, {useState} from "react";

function TimeDigital() {
    let time = new Date().toLocaleTimeString();

    const [cTime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    setInterval(updateTime, 1000)
    return(
        <>
            <h2 className="time">{time}</h2>
        </>
    )
}

export default TimeDigital;
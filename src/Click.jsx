import React, {useState} from "react";

const Click = () => {
    const state = useState();

    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1)
    }
    return (
        <>
            <h2 className="incnum">{count}</h2>
            <button onClick={IncNum} className="click__me">Click Me</button>
        </>
    )
}

export default Click;
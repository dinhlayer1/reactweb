import React, { useState } from "react";
import Questions from "./DataQues";
import MyQues from "./MyQues";

function ToDoQues() {

    const [data, setData] = useState(Questions);

    return(
        <>
            <div className="root__container">
                <div className="todo__list">
                    <h2 className="ques__heading">
                        React Interview Questions
                    </h2>                  
                    {data.map((curEl) => {
                        const {id} = curEl;
                        return <MyQues key={id} {...curEl} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ToDoQues;
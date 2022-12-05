import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function MyQues({question, answer}) {
    const [show, setShow] = useState(false)
    return(
        <>
            <div className="ques__item">
                <div className="ques__detail">
                    <Button onClick={() => setShow(!show)}>
                        {show ? <RemoveIcon /> : <AddIcon /> }                              
                    </Button>
                    {question}
                </div>
                {show && <div className="answer" >                     
                    <p className="p__answer">
                        {answer}
                    </p>
                </div>}
            </div>
        </>
    )
}

export default MyQues;
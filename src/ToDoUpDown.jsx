import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function ToDoUpDown() {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    }

    const decNum = () => {
        if(num > 0) {
            setNum(num - 1);
        }
        else{
            setNum(0);
        }
    }

    return(
        <>
            <div className="root__container">
                <div className="todo__list">
                    <h2 className="h2__number">{num}</h2>
                    <div className="todo__up-down">
                        <Button onClick={incNum}><AddIcon /></Button>
                        <Tooltip title="Delete">
                            <Button onClick={decNum}><DeleteIcon /></Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoUpDown;
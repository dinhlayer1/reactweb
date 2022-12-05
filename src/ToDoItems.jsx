import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ToDoItems = (props) => {

    return(
        <>
            <li>  
                <Button>
                    <DeleteIcon onClick={() => {props.onSelect(props.id)}}></DeleteIcon>
                </Button>            
                {props.text}
            </li>
        </>
    )
}

export default ToDoItems;
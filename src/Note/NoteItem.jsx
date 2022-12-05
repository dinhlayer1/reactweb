import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';

function NoteItem(props) {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note__item">
                <p>{props.title}</p>
                <p>{props.content}</p>
                <Button onClick={deleteNote}>
                    <DeleteOutlinedIcon />
                </Button>
            </div>
        </>
    )
}

export default NoteItem;
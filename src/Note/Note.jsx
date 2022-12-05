import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

function Note(props) {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const inputEvent = (e) => {

        const {name, value} = e.target;

        setNote((preData) => {
            return{
                ...preData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title:'',
            content: ''
        })
    }

    const expandIt = () => {
        setExpand(true)
    }

    const btoNormal = () => {
        setExpand(false)
    }

    return(
        <>
            <div className="note__div"
                onDoubleClick={btoNormal}
                style={expand ? {height: 130}: null}>
                {expand ?
                <input type="text"
                    placeholder="Title"
                    name="title"
                    autoComplete="off"
                    value={note.title}
                    onChange={inputEvent}>                    
                </input> : null }
                <br />
                <textarea rows="" column=""
                        placeholder="Write a note..."
                        name="content"
                        value={note.content}                      
                        onChange={inputEvent}
                        onClick={expandIt}                                                       
                        >
                </textarea>
                {expand ?
                <Button onClick={addEvent}>
                    <AddIcon />
                </Button> : null}
            </div>
        </>
    )
}

export default Note;
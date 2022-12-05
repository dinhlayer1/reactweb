import React, { useState } from "react";
import Note from "../Note/Note";
import NoteItem from "./NoteItem";

function AppNote() {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((preData) => {
            return [...preData, note]
        })
    }

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((curData, indx) => {
                return indx !== id;
            })
        })
    }

    return(
        <>
            <Note 
                passNote = {addNote}
            />
            <div className="note__list">
                {addItem.map((val, index) => {
                    return (<NoteItem 
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />)
                })}          
            </div>         
        </>
    )
}

export default AppNote;
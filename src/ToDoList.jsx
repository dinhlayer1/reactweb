import React, {useState} from "react";
import ToDoItems from './ToDoItems';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function ToDo() {

    const [inputList, setInputList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(
            e.target.value
        )
    };

    const listOfItems = (e) => {
        e.preventDefault();
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrEl, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="root__container">
                <div className="todo__list">
                    <h2 className="todo__heading">ToDo List</h2>
                    <form className="todo__form">
                        <input type='text'
                            placeholder="Add a item"
                            onChange={itemEvent}
                            value={inputList}
                         />
                        <Button onClick={listOfItems}><AddIcon /></Button>
                    </form>
                    <ul className="todo__item">
                        {items.map((itemval, index) => {
                            return (
                                <ToDoItems 
                                    key = {index}
                                    id = {index}
                                    text = {itemval}
                                    onSelect = {deleteItem}
                                />
                            )                              
                        })}                    
                    </ul>
                </div>
            </div>
        </>
    ) 
}

export default ToDo;
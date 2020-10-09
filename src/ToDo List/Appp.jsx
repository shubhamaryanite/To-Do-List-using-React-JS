import React, {useState} from 'react';
import Todoo from './Todolist';
import './Todo.css';

const Appp = () =>{

    const [inputList, setInputList]  = useState("");
    const [items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const saveItems = () => {
        setItems((oldItems) =>{
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    const delItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) =>{
                return index !==id;
            });
        });
    };

    return(
        <div>
            <div className="main_di">
                <div className="center_div">
                    <br></br>
                    <h1>To-Do List</h1>
                    <br></br>
                    <input type="text" placeholder="Add new item" onChange={itemEvent}
                    value={inputList}></input>
                    <button onClick= {saveItems}> + </button>

                    <ol>
                        {/* <li> {inputList}</li> */}
                        {items.map( (itemval, index) => {
                            return <Todoo key={index} id={index} text={itemval}
                            onSelect={delItems}>
                            </Todoo>
                        } )}
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default Appp;
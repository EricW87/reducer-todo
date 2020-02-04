import React, { useReducer, useState } from 'react';
import { initialState, todolistReducer } from '../reducers';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [state, dispatch] = useReducer(todolistReducer, initialState);
    const [name, setName] = useState("");

    const addItem = name => {
        let newItem = { name: name, completed: false, id: Math.floor((Math.random() * 10000000000)) };
        dispatch({type: "ADD_ITEM", newItem, payload: newItem});
        setName("");
    };

    return (
        <div>
            {state.map(item => {
                return (
                    <TodoItem key={item.id} item={item} />
                )
            })}
            <TodoForm name={name} setName={setName} addItem={addItem}/>
        </div>
    );
};

export default TodoList;
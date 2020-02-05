import React from "react";

const Todo = props => {
    let className = "task";
    if(props.item && props.item.completed)
        className = "taskComplete";

    return (
        <div className = {className} >
            {props.item.name}
        </div>
    );
}

export default Todo;
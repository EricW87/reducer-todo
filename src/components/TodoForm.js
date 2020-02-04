import React from "react";

const TodoForm = props => {
    const changeHandler = event => {
        props.setName(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.addItem(props.name);
    };

    return (
        <div className="forms">
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="task"
                    value={props.name}
                    onChange={changeHandler}
                />
                <button type="submit">Add</button>
            </form>
            {/* <button onClick={() => this.props.clearCompleted()}>Clear Completed</button> */}
        </div>
    );
};

export default TodoForm;
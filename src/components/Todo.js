import React, { useState, useContext } from 'react'
import { Context } from "./context";

export default function Todo(props) {
    const { id, text, checked } = props.todo;
    const { toggleTodo } = useContext(Context);
    let classes = ['todo'];
    if (checked) {
        classes.push('completed');
    }
    function handleDelete(e) {
        props.deleteTodo(e.target.value);
    }

    return (

        <div className={classes.join(' ')}>
            <input type='checkbox' value={checked} onChange={() => toggleTodo(id)} />
            <div>{text}</div>
            <input type='button' value={id} onClick={handleDelete} />
        </div>
    )
}

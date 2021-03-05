import React, { useState, useContext } from 'react'
import { Context } from "./context";

export default function Todo(props) {

    const { id, text, checked } = props.todo;
    const { toggleTodo, deleteTodo } = useContext(Context);

    let classes = ['todo'];
    if (checked) {
        classes.push('completed');
    }

    return (
        <div className={classes.join(' ')}>
            <input type='checkbox' value={checked} onChange={() => toggleTodo(id)} />
            <div>{text}</div>
            <input type='button' value={id} onClick={() => deleteTodo(id)} />
        </div>
    )
}

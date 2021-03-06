import React, { useState, useContext } from 'react'
import { Context } from "./context";

export default function Todo(props) {

    const { id, text, checked } = props.todo;
    const { toggleTodo, deleteTodo, editTodo } = useContext(Context);
    let classes = ['todo'];
    if (checked) {
        classes.push('completed');
    }

    return (
        <div className={classes.join(' ')}>
            <input type='checkbox' value={checked} onChange={() => toggleTodo(id)} />
            <input value={text} type='text' onChange={(e) => editTodo(id, e)} />
            <input type='button' value={id} onClick={() => deleteTodo(id)} />
        </div>
    )
}

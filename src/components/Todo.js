import React, { useContext } from 'react'
import { Context } from "./context";

export default function Todo(props) {

    const { id, text, checked, folder } = props.todo;
    const { toggleTodo, deleteTodo, editTodo, currentFolder } = useContext(Context);
    let classes = ['todo'];
    if (checked) {
        classes.push('completed');
    }
    // if (!folder.includes(currentFolder)) {
    //     classes.push('hide');
    // }

    return (
        <div className={classes.join(' ')}>
            <input type='checkbox' value={checked} onChange={() => toggleTodo(id)} />
            <input value={text} type='text' onChange={(e) => editTodo(id, e)} />
            <input type='button' value={id} onClick={() => deleteTodo(id)} />
        </div>
    )
}

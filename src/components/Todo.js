import React, { useState } from 'react'

export default function Todo(props) {
    const { id, text, completed } = props.todo;
    const [checked, setChecked] = useState(false);
    let classes = ['todo'];
    if (checked) {
        classes.push('completed');
    }
    function handleDelete(e) {
        props.deleteTodo(e.target.value);
    }
    return (

        <div className={classes.join(' ')}>
            <input type='checkbox' value={checked} onChange={() => setChecked(!checked)} />
            <div>{text}</div>
            <input type='button' value={id} onClick={handleDelete} />
        </div>
    )
}

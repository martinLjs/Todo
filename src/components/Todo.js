import React from 'react'

export default function Todo(props) {
    const checked = props.checked;
    const text = props.text;
    const id = props.id;
    function handleDelete(e) {
        props.deleteTodo(e.target.value);
    }
    return (

        <div>
            <input type='checkbox' value={checked} />
            <div>{text}</div>
            <input type='button' value={id} onClick={handleDelete} />
        </div>
    )
}

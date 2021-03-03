import React from 'react'

export default function Todo(props) {
    const checked = props.checked;
    const text = props.text;
    return (

        <div>
            <input type='checkbox' value={checked} />
            <div>{text}</div>
        </div>
    )
}

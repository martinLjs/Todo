import React, { useContext } from 'react'
import { Context } from "./context";
import styles from '../styles/todo.css'
import deleteImg from '../img/delete.png'
import markImg from '../img/mark.png'
import circleImg from '../img/circle.png'
import onDeleteImg from '../img/onDelete.png'
export default function Todo(props) {

    const { id, text, checked, folder } = props.todo;
    const { toggleTodo, deleteTodo, editTodo, currentFolder } = useContext(Context);
    let classes = ['todo'];
    let labels = ['check'];
    if (checked) {
        classes.push('completed');
        labels.push('checkTrue');
    } else { labels.push('checkFalse'); }


    return (
        <div className={classes.join(' ')}>
            <input className='hide' type='checkbox' id={id} value={checked} onChange={() => toggleTodo(id)} /><label className={labels.join(' ')} for={id}></label>
            <input className='todo__text' value={text} type='text' onChange={(e) => editTodo(id, e)} />
            <input className='hide' type='button' id={'del' + id} value={id} onClick={() => deleteTodo(id)} /><label className={'todo_delete'} for={'del' + id}></label>
        </div>
    )
}

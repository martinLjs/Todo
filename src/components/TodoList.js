import React, { useContext } from 'react'
import { Context } from "./context";
import Todo from "../components/Todo";
import styles from '../styles/todoList.css'

export default function TodoList(props) {

    const todoArr = props.todos;
    const { currentFolder } = useContext(Context);
    let todoList;


    if (todoArr.length === 0) { todoList = <div>You do not have any todo</div> } else {
        let filteredList = todoArr.filter((item) => item.folder.includes(currentFolder))
        todoList = filteredList.map((todo) =>
            <Todo key={todo.id} todo={todo} />)
    }

    return (
        <div className='todoList'>
            {todoList}
        </div>
    )
}

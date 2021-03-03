import React from 'react'
import Todo from "../components/Todo";
export default function TodoList(props) {
    const todoArr = props.todos;
    let todoList;
    if (todoArr.length == 0) { todoList = <div>You do not have any todo</div> } else {
        todoList = todoArr.map((todo) => <Todo checked={todo.checked} text={todo.text} />)
    }

    return (
        <div>
            {todoList}
        </div>
    )
}

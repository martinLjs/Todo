import React from 'react'
import Todo from "../components/Todo";
export default function TodoList(props) {
    const todoArr = props.todos;
    let todoList;

    function deleteTodo(id) {
        props.deleteTodo(id);
    }
    if (todoArr.length == 0) { todoList = <div>You do not have any todo</div> } else {
        todoList = todoArr.map((todo) => <Todo deleteTodo={deleteTodo} checked={todo.checked} text={todo.text} id={todo.id} />)
    }

    return (
        <div>
            {todoList}
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import TodoList from "../components/TodoList";
import styles from '../styles/style.css';
function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [CurId, setCurId] = useState(0);
    useEffect(() => {
        let state = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(state);
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])
    function deleteTodo(id) {
        let updatedList = todos.filter(item => item.id != id);
        setTodos(updatedList);
    }
    function handleTodos(e) {
        if (e.keyCode == 13 && input !== '') {
            let newTodo = {
                id: CurId,
                checked: false,
                text: e.target.value
            };
            setCurId(CurId + 1);
            setTodos([...todos, newTodo]);
            setInput('');
        }

    }
    return (
        <div className='app__body'>
            <div className='app__input'>
                <input value={input} placeholder='Creat a note' onKeyUp={handleTodos} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='app__todoList'>
                <TodoList deleteTodo={deleteTodo} todos={todos} />
            </div>
        </div>

    )
}

export default App
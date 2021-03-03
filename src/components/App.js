import React, { useState } from 'react'
import TodoList from "../components/TodoList";
function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    function handleInput(e) {
        setInput(e.target.value);
    }
    function handleTodos(e) {
        if (e.keyCode == 13 && input !== '') {
            let newTodo = {
                checked: false,
                text: e.target.value
            };
            setTodos([...todos, newTodo]);
        }



    }
    return (
        <div>
            <input value={input} placeholder='Creat a note' onKeyUp={handleTodos} onChange={handleInput} />
            <TodoList todos={todos} />
        </div>
    )
}

export default App
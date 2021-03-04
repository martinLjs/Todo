import React, { useState } from 'react'
import TodoList from "../components/TodoList";
function App() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [CurId, setCurId] = useState(0);
    function handleInput(e) {
        setInput(e.target.value);
    }
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
        <div>
            <input value={input} placeholder='Creat a note' onKeyUp={handleTodos} onChange={handleInput} />
            <TodoList deleteTodo={deleteTodo} todos={todos} />
        </div>
    )
}

export default App
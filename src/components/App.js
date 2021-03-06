import React, { useState, useEffect } from 'react'
import TodoList from "../components/TodoList";
import styles from '../styles/style.css';
import { Context } from "./context";
function App() {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let state = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(state);
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodo = (id) => {
        let updatedList = todos.filter(item => item.id != id);
        setTodos(updatedList);
    }
    const toggleTodo = (id) => {
        let updatedList = todos.map(
            item => {
                if (item.id === id) { item.checked = !item.checked; }
                return item;
            });
        setTodos(updatedList);
    }
    const editTodo = (id, value) => {
        let updatedList = todos.map(item => {
            if (item.id === id) { item.text = value.target.value }
            return item;
        })
        setTodos(updatedList);
    }
    function addTodo(e) {
        if (e.keyCode === 13 && input !== '') {
            let newTodo = {
                id: Date.now(),
                checked: false,
                text: e.target.value
            };
            setTodos([...todos, newTodo]);
            setInput('');
        }
    }
    return (
        <Context.Provider value={{ toggleTodo, deleteTodo, editTodo }}>
            <div className='app__body'>
                <div className='app__input'>
                    <input value={input} placeholder='Creat a note' onKeyUp={addTodo} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className='app__todoList'>
                    <TodoList todos={todos} />
                </div>
            </div>
        </Context.Provider>

    )
}

export default App
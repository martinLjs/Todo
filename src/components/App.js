import React, { useState, useEffect } from 'react'
import TodoList from "../components/TodoList";
import Folders from './Folders';
import { Context } from "./context";
import styles from '../styles/style.css';

function App() {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [currentFolder, setCurrentFolder] = useState('all');
    const [folders, setFolders] = useState(['all', 'home']);

    useEffect(() => {
        let state = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(state);
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        let state = JSON.parse(localStorage.getItem('folders')) || ['all'];
        setFolders(state);
    }, [])
    useEffect(() => {
        localStorage.setItem('folders', JSON.stringify(folders))
    }, [folders])


    useEffect(() => {
        let state = JSON.parse(localStorage.getItem('currentFolder')) || [];
        setCurrentFolder(state);
    }, [])

    useEffect(() => {
        localStorage.setItem('currentFolder', JSON.stringify(currentFolder))
    }, [currentFolder])

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
        console.log(todos)
    }
    const editTodo = (id, value) => {
        let updatedList = todos.map(item => {
            if (item.id === id) { item.text = value.target.value }
            return item;
        })
        setTodos(updatedList);
    }

    function addTodo() {
        if (input !== '') {
            let newTodo = {
                id: Date.now(),
                checked: false,
                folder: ['all', currentFolder],
                text: input
            };
            setTodos([...todos, newTodo]);
            setInput('');
        }
    }
    const addTodoBtn = () => { addTodo() }
    const addTodoByEnter = (e) => { if (e.keyCode === 13) { addTodo() } }

    const addFolder = (e) => {
        if (e.keyCode === 13) {
            setFolders([...folders, e.target.value]);
            e.target.value = '';
        }

    }

    return (
        <Context.Provider value={{ toggleTodo, deleteTodo, editTodo, setCurrentFolder, currentFolder }}>
            <div className='app__body'>
                <div className='sidebar'>
                    <div>{currentFolder}</div>
                    <div>Add folder</div>
                    <input placeholder='Creat a folder' onKeyUp={addFolder} />
                    <Folders folders={folders} />
                </div>

                <div className='app__input'>
                    <input value={input} placeholder='Creat a note' onKeyUp={addTodoByEnter} onChange={(e) => setInput(e.target.value)} />
                    <div onClick={addTodoBtn}>+</div>
                </div>
                <div className='app__todoList'>
                    <TodoList todos={todos} />
                </div>
            </div>
        </Context.Provider>

    )
}

export default App
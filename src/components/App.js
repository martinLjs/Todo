import React, { useState } from 'react'
function App() {
    const [input, setInput] = useState('');
    function handleChange(e) {
        setInput(e.target.value);
    }
    return (
        <div>
            <input value={input} placeholder='Creat a note' onChange={handleChange} />
        </div>
    )
}

export default App
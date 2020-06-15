import React from 'react';


const TodoList = () => {
    const items = ['learn html', 'learn css', 'learn js', 'learn react']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>

        </ul>
    )
}

export default TodoList;
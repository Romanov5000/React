import React from 'react';
import TodoListItem from '../TodoListItem'

import './TodoList.css'

const TodoList = (props) => {
  const { todos, onDelete, onToggleDone, onToggleImportant } = props;

  const elements = todos.map((item)=>{

    const{id, ...otherPros} = item;

    return (
        <li className="list-group-item" key={id}>  
          <TodoListItem 
            {...otherPros}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
    );
  });

    return(
      <ul className="list-group">
        {elements}
      </ul>
    )
  }

  export default TodoList;
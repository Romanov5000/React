import React from 'react';
import TodoListItem from '../TodoListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './TodoList.css'

const TodoList = (props) => {
  const { todos, onDelete, onToggleDone, onToggleImportant } = props;
  if (!todos.length) {
    const elements = <p>Nothing to do!</p>;
    return elements
  }
  const elements = todos.map((item) => {

    const { id, ...otherPros } = item;

    return (
      <CSSTransition
      key={id}
      classNames={'tranformTodo'}
      timeout={700}>
        <li className="list-group-item" key={id}>
          <TodoListItem
            {...otherPros}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      </CSSTransition>
    );
  });

  return (
    <TransitionGroup component='ul' className="list-group">
      {elements}
    </TransitionGroup>
  )
}

export default TodoList;

import React from 'react';

import './Header.css'

const Header = (props)=>{

  const { done, todo } = props;

    return (
      <div className="Header">
        <h1>Todo List</h1>
        <p>
          <span>done: {done}</span>
          <span>todo: {todo}</span>
        </p>
      </div>
    );
  }

  export default Header;
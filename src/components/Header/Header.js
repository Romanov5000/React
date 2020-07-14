import React from 'react';

import './Header.css'

const Header = (props)=>{

  const { done, todo } = props;

    return (
      <div className="Header">
        <h1>To do List</h1>
        <p>
          <span>todo: {todo}</span>
          <span>done: {done}</span>
        </p>
      </div>
    );
  }

  export default Header;
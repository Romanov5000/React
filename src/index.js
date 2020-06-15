import React from 'react';
import ReactDOM from 'react-dom';

import SearchBlock from './components/searchBlock';
import Header from './components/header';
import TodoList from './components/todoList';

const App = () => {
  const isLoggen = true;
  const loginBlock = <span>sign in</span>
  const welcome = <span>Hello</span>
  return (
    <div>
      {isLoggen ? welcome : loginBlock}
      <Header />
      <SearchBlock />
      <TodoList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

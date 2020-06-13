import React from 'react';
import ReactDOM from 'react-dom';

import SearchBlock from './components/searchBlock';

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

const Header = () => {
  let st = {
    color : 'red',
    fontSize : ' 40px',
  }
  return (
    <h1 style={st} className = 'header'>todo list</h1>
  )
}

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

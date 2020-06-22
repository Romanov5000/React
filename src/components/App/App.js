import React from 'react';
import SearchBlock from '../SearchBlock';
import Header from '../Header';
import TodoList from '../TodoList';
import './App.css';
import Filter from '../Filter';


const App = ()=>{

const todoData =[
  {text: 'Learn HTML', id:1}, 
  {text: 'Learn CSS', id:2}, 
  {text: 'Learn JS', id:3}  
]

  return (
    <div className="App">
    <Header />
    <div className="line">
      <SearchBlock />
      <Filter/>
    </div>
    <TodoList todos={todoData}/>
    </div>
  );
}

export default App;
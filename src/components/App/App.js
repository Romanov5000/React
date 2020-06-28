import React from 'react';
import SearchBlock from '../SearchBlock';
import Header from '../Header';
import TodoList from '../TodoList';
import './App.css';
import Filter from '../Filter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';


export default class App extends React.Component {

  cId = 100;

  state = {
    todoData : [
      {text: 'Learn HTML', important: false, done: false, id:1}, 
      {text: 'Learn CSS', important: true, done: false, id:2}, 
      {text: 'Learn JS', important: false, done: false, id:3}  
    ],
  }

  onDelete = (id) => {
    this.setState((prevState) => {
      const index = prevState.todoData.findIndex((el) => el.id === id);
      
      const arr = [
        ...prevState.todoData.slice(0, index),
        ...prevState.todoData.slice(index + 1)
      ];
      
      return {
        todoData: arr
      }
    })
  }

  onAdd = (label) => {
    const obj = {
      text: label,
      important: false,
      id: this.cId++,
    };

    this.setState((prevState) => {
      const newArr = [ obj, ...prevState.todoData ];

      return {
        todoData: newArr
      }
    })

  }

  onToggleDone = (id) => {
    console.log(id);
    this.setState((prevState) => {
      const index = prevState.todoData.findIndex((el) => el.id === id);

      const newObj = {
        ...prevState.todoData[index],
        done: !prevState.todoData[index].done
      };

      const newArr = [
        ...prevState.todoData.slice(0, index),
        newObj,
        ...prevState.todoData.slice(index + 1)
      ];

      return {
        todoData: newArr
      } 
    })
  }

  render() {
    return (
      <div className="App">
        <Header done={2} todo={1}/>
        <div className="line">
          <SearchBlock />
          <Filter/>
        </div>
        <ItemAddForm onAdd={this.onAdd}/>
        <TodoList
          todos={this.state.todoData}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}
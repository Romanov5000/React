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
    todoData: [
      { text: 'Learn HTML', important: false, done: false, id: 1 },
      { text: 'Learn CSS', important: false, done: false, id: 2 },
      { text: 'Learn JS', important: false, done: false, id: 3 }
    ],
    filter: 'all', // all || active || done
    search: '', // Type string
  }

  filter = (arr, filter) => {
    switch (filter) {
      case 'all':
        return arr;
      case 'active':
        return arr.filter(el => !el.done);
      case 'done':
        return arr.filter(el => el.done);
      default: return arr
    }
  }
  search = (arr, searchText) => {
    if (!searchText) {
      return arr
    }
    const newArr = arr.filter((item) => {
      return item.text.toLowerCase().includes(searchText.toLowerCase())
    });

    return newArr;
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
      const newArr = [obj, ...prevState.todoData];

      return {
        todoData: newArr
      }
    })

  }

  getNewArraAccordingProp = (prop, prevState, id) => {
    const index = prevState.todoData.findIndex((el) => el.id === id);

    const newObj = {
      ...prevState.todoData[index],
      [prop]: !prevState.todoData[index][prop]
    };

    const newArr = [
      ...prevState.todoData.slice(0, index),
      newObj,
      ...prevState.todoData.slice(index + 1)
    ];

    return newArr;
  }

  onToggleDone = (id) => {
    this.setState((prevState) => {
      const newArr = this.getNewArraAccordingProp('done', prevState, id);

      return {
        todoData: newArr
      }
    });
  }
  onToggleImportant = (id) => {

    this.setState((prevState) => {
      const newArr = this.getNewArraAccordingProp('important', prevState, id);

      return {
        todoData: newArr
      }
    });
  }
  onFilterChange = (filter) => {
    this.setState({
      filter: filter,
    })
  }
  onSearch = (search) => {
    this.setState({
      search: search,
    })
  }

  render() {
    const { todoData, filter, search } = this.state;
    const doneSize = todoData.filter(el => el.done).length;
    const todoSize = (todoData.length - doneSize);
    const visibleTodos = this.search(this.filter (todoData, filter), search);

    return (
      <div className="App">
        <Header done={doneSize} todo={todoSize} />
        <div className="line">
          <SearchBlock
            onSearch={this.onSearch} />
          <Filter
            filter={filter}
            onFilterChange={this.onFilterChange} />
        </div>
        <ItemAddForm onAdd={this.onAdd} />
        {todoData.length ? <TodoList
          todos={visibleTodos}
          onDelete={this.onDelete}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        /> : <p>No Todo!</p>}
      </div>
    );
  }
}
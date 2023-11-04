import React from 'react';
import './App.scss';
import logo from './assets/Logo.png'
import AddTodo from './containers/AddTodo/AddTodo';
import TodoList from './containers/TodoList/TodoList';
import axios from 'axios';

export const todoContext = React.createContext(null)

function App() {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    const url = 'http://localhost:8000/api/todo-list/'
    axios.get(url)
    .then(response => {
      setTodos(response.data)
    })
  }, [])

  const addTodoHandler = React.useCallback((content) => {
    const url = 'http://localhost:8000/api/todo-list/'
    axios.post(url, {
      content: content,
    })
    .then(response => {
      setTodos(prevState => [...prevState, response.data])
    })
  }, [])


  return (
    <div>
      <div className="header"></div>
      <todoContext.Provider value={{todos: todos, setTodos: setTodos}}>
        <div className="container">
          <section className="logo-section">
            <img src={logo} alt="logo" />
          </section>
          <section className="add-todo-section">
            <AddTodo onAddTodo={addTodoHandler}/>
          </section>
          <section className="todo-list-section">
            <TodoList/>
          </section>
        </div>
      </todoContext.Provider>
    </div>
  );
}

export default App;

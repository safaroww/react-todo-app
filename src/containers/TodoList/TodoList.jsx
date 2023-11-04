import React, { Fragment } from "react";
import "./TodoList.scss";
import TodoListTitle from "../../components/TodoListTitle/TodoListTitle";
import Todo from "../../components/Todo/Todo";
import { todoContext } from "../../App";
import axios from "axios";

function TodoList() {
  const { todos, setTodos } = React.useContext(todoContext);

  const checkHandler = React.useCallback((id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const todo = todos[todoIndex]
    const url = 'http://localhost:8000/api/todo-list/' + id + '/'
    axios.put(url, {
        content: todo.content,
        completed: !todo.completed
    })
    .then(() => {
        setTodos(prev => {
            const newState = [...prev]
            const newTodo = {...todo, completed: !todo.completed}
            newState[todoIndex] = newTodo
            return newState
        })
    })
  }, [todos]);


  const deleteHandler = React.useCallback(async (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    const url = 'http://localhost:8000/api/todo-list/' + id + '/'
    await axios.delete(url)
    setTodos(prevState => {
        const newState = [...prevState]
        newState.splice(todoIndex, 1)
        return newState
    })
  })


  return (
    <Fragment>
      <TodoListTitle />
      <div>
        {todos.map((todo) => (
          <Todo
                key={todo.id}
                /*completed*/
                {...todo}
                onChecked={() => checkHandler(todo.id)}
                onDeleted={() => deleteHandler(todo.id)}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default TodoList;

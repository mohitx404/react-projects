import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {

  const [todos, setTodos] = useState()

  const addTodo = (todo) => {
    setTodos((prev) => [[{ id: Date.now(), ...todo }], ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo))
  }
  
 // filter ==> A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  // It will return an object which will have the toggle to true if the toggle is completed
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id)? {...prevTodo, completed: !prevTodo.completed} :  prevTodo))
  }
  return (
    <TodoProvider value={{ addTodo, updateTodo, todos, deleteTodo, toggleComplete }}>
      <div>hello</div>
    </TodoProvider>
  )
}

export default App

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import  Task  from "./components/Task";
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('yourTasks')) || []);
  
  const [filter, setFilter] = useState("All");

  const addTodo = (text) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      isCompleted: false
    },
  ];

  setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('yourTasks', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header />
      <TaskForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter}/>
        {todos
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .map((todo) => (
        <Task key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
      
    </>
  );
}

export default App;

import "./App.css";

import { Button, Form } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import { useState } from "react";
import {React } from 'react';

function App() {
  console.log(defaultTodos);
  const [todos, setTodos] = useState(defaultTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  

  const addTodo = (e) => {
    e.preventDefault();
    if(newTodoTitle.trim === "") 
      return alert("Please enter a todo")

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Form onSubmit={addTodo}>
        <Form.Group controlId="formNewTodo">
          <Form.Control
            type="text"
            placeholder="Enter new todo"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-2 mb-2" type="submit">
          Add Todo
        </Button>
      </Form>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}



export default App;
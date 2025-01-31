import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { shoppingList } from "./data";
import { useState } from "react";

function App() {
  console.log(shoppingList);

const [shoppingList, setShoppingList] = useState(defaultShoppingList);

const addItem = () => {
  const newItem = {
    id: shoppingList.length + 1,
    title: "New Item",
    completed: false,
  };

  setShoppingList{[...shoppingList, newItem]}
};

const toggleComplete = {id:number} => {
  const updatedShoppingList= shoppingList.map((shoppingList)) => {
    if (todo.id === id)
  }
}

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2">Add Todo</Button>
      <TodoList todos={shoppingList} />
    </div>
  );
}

export default App; 

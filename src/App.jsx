import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { defaultShoppingList } from "./data";
import { useState } from "react";

function App() {
  console.log(defaultShoppingList);

const [shoppingList, setShoppingList] = useState(defaultShoppingList);

const addItem = () => {
  const newItem = {
    id: shoppingList.length + 1,
    title: "New Item",
    completed: false,
  };

  setShoppingList([...shoppingList, newItem]);
};

 const toggleComplete = (id) => {
  if (shoppingList.id === id) {
    shoppingList.completed = !shoppingList.completed;
  }
  return shoppingList;
 }

setShoppingList(updatedShoppingList);

const deleteItem = (id) => {
  const updatedShoppingList = shoppingList.filter((item) => item.id !== id);
  setShoppingList(updatedShoppingList);
}


  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2" onClick={addItem}>Add Todo</Button>
      <TodoList todos={defaultShoppingList} 
      toggleComplete={toggleComplete}
      deleteItem={deleteItem}
      />
    </div>
  );
}

export default App; 

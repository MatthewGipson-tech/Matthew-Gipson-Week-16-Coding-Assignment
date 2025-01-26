import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { shoppingList } from "./data";

function App() {
  console.log(shoppingList);

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2">Add Todo</Button>
      <TodoList todos={shoppingList} />
    </div>
  );
}

export default App; 
 
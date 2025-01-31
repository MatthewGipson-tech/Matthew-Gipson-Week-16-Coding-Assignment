import { defaultShoppingList } from "../data";
import "./Todo.css";

import { Button } from "react-bootstrap";

export default function TodoList({ updatedShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);


  return (
    <div className="todo">
      <p className={todo.completed ? "todo-title-completed " : ""}>
        {todo?.title}
      </p>
      <div className="btn-group">
        <Button variant="outline-primary"
        onClick={() => toggleComplete(item.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger" onClick={() => deleteItem(NavItem.id)}>Delete</Button>
      </div>
    </div>
  );
}
 
import { defaultShoppingList } from "../data";
import "./Todo.css";

import { Button } from "react-bootstrap";

export default function TodoList({ items, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);


  return (
    <div className="todo">
      <p className={defaultShoppingList.completed ? "shoppingList-title-completed " : ""}>
        {defaultShoppingList?.title}
      </p>
      <div className="btn-group">
        <Button 
        variant="outline-primary"
        onClick={() => toggleComplete(updatedItem.id)}>
          {updatedItem.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger" onClick={() => deleteItem(item.id)}>Delete</Button>
      </div>
    </div>
  );
}
 
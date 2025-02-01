import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { defaultShoppingList } from "../data";

export default function TodoList({ updatedShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((updatedItem) => (
        <ListGroup.Item key={updatedItem.id}>
          <Todo item={addItem} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
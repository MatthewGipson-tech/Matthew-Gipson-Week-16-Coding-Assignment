import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { defaultShoppingList } from "../data";

export default function TodoList({ items, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((addItem) => (
        <ListGroup.Item key={items.id}>
          <Todo item={addItem} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
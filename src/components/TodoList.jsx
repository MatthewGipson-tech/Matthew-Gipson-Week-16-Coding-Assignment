import { ListGroup } from "react-bootstrap";
import { defaultShoppingList } from "../data";
import { todo } from "node:test";

export default function TodoList({ defaultShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((items) => (
        <ListGroup.Item key={items.id}>
          <todo items = {todo} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
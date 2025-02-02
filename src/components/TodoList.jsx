import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { defaultShoppingList } from "../data";

export default function TodoList({ defaultShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((items) => (
        <ListGroup.Item key={items.id}>
          <todo item = {addItem} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
import { ListGroup } from "react-bootstrap";
import { defaultShoppingList } from "../data";

export default function TodoList({ defaultShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <todo item = {addItem} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
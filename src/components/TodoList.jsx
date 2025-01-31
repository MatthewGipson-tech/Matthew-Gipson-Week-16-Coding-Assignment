import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { defaultShoppingList } from "../data";

export default function TodoList({ updatedShoppingList, toggleComplete, deleteItem }) {
  console.log(defaultShoppingList);

  return (
    <ListGroup>
      {defaultShoppingList.map((item) => (
        <ListGroup.Item key={item.id}>
          <Todo todo={todo} 
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
 
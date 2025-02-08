import { FC } from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import { Todos } from "../../types";

const TodoProp {
  todos: TodoType;
  toggleComplete: (id) => void
  deleteTodo: (id) => void
};

const TodoListProps = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Todo
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
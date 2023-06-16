import "./index.css";
import { useState } from "react";
import TodoItem from "../todoItem";
import { todos } from "../../mocks/todos";

const TodoList = ({
  emoji,
  filterChars,
  filterCompleted,
  filterUncompleted,
}) => {
  const [todoList, setTodoList] = useState(todos);
  const onHandleTodosFilter = (numChars) => {
    setTodoList(todoList.filter((todo) => todo.title.length <= numChars));
  };
  const onHandleTodosFilterComplete = () => {
    setTodoList(todoList.filter((todo) => todo.completed === true));
  };
  const onHandleTodosFilterUncomplete = () => {
    setTodoList(todoList.filter((todo) => todo.completed !== true));
  };

  const onClearFilter = () => setTodoList(todos);

  return (
    <div className="TodoList">
      <div className="TodoList__info">
        <h4>TODO</h4>
        <p>{todoList.length}</p>
      </div>
      <hr />
      <div className="TodoList__buttons">
        <button onClick={() => onHandleTodosFilter(filterChars)}>
          Filtra per {filterChars}
        </button>
        <button onClick={() => onHandleTodosFilterComplete(filterCompleted)}>
          Filtra task completati
        </button>
        <button
          onClick={() => onHandleTodosFilterUncomplete(filterUncompleted)}
        >
          Filtra task incompleti
        </button>
        <button onClick={onClearFilter}>Clear</button>
      </div>

      {todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} emoji={emoji} />
      ))}
    </div>
  );
};

export default TodoList;

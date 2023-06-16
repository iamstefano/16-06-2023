/* import Navbar from "./components/navbar"; */
import Title from "./components/title";
import TodoList from "./components/todoList";
/* import { todos } from "./mocks/todos"; */
import "./App.css";

function App() {
  const emoji = " ✨";

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Title />
      <div className="todoList__wrapper">
        <TodoList emoji={emoji} filterChars={16} />
        <TodoList emoji={emoji} filterChars={24} />
        <TodoList emoji={emoji} filterChars={32} filterCompleted />
      </div>
    </div>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My first react app is a to-do list</h1>
      <div className="App">
        <div className="App__todosList ">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App; */

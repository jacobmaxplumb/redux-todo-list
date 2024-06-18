import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const todoList = useSelector((state) => state.todoList);
  console.log(todoList);
  return (
    <div style={{ margin: "30px" }}>
      <input value={todoList.text} />
      <button>Add</button>
      <ul>
        {todoList.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

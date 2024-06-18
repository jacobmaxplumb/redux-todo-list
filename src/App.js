import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateText } from "./redux/todo.slice";

function App() {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "30px" }}>
      <input value={todoList.text} onChange={(e) => dispatch(updateText(e.target.value))}/>
      <button onClick={() => dispatch(addTodo())}>Add</button>
      <ul>
        {todoList.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

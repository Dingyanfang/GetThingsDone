import './App.css';
import TodoList from "./components/TodoList";
import {GoChecklist} from "react-icons/go";

function App() {
  return (
    <div className="todo-app">
      <header>
        <h1>
          <GoChecklist style={{fontSize: "80%"}}/>
          {"    "}Get Things Done !
        </h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;

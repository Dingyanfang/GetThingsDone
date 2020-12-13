import React, {useState} from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { FiCheckSquare } from "react-icons/fi";

function Todo(props){

  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  // console.log(todos);

  const submitUpdate = value => {
    props.updateTodo(edit.id, value);
    setEdit({
      id:null,
      value: ""
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {
        props.todos.map((todo, index) => {
          return (
            <div
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div className="todo-text" key={todo.id}>
                <p>{todo.text}</p>
              </div>
              <div className="icons">
                <FiCheckSquare
                 onClick={() => props.completeTodo(todo.id)}
                 className = "complete-icon"
                 />
                <TiEdit
                onClick={()=> setEdit({ id: todo.id, value: todo.text})}
                className="edit-icon"
                />
                <RiDeleteBin2Line
                onClick={()=> props.removeTodo(todo.id)}
                className="delete-icon"
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}


export default Todo;

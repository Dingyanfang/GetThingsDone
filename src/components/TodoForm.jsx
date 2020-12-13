import React, { useState, useEffect, useRef} from "react";



function TodoForm(props){
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random()*1000),
      text: input
    });

    setInput("");
  };


  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit? (
          <div>
          <input
           type="text"
           placeholder="Update the todo"
           value={input}
           name="text"
           className="todo-input edit"
           onChange={handleChange}
           ref={inputRef}
           multiline
           rowsMax={2}
          />
          <button className="todo-button edit">Update</button>
          </div>
        ) : (
          <div>
          <input
           type="text"
           placeholder="Add a todo"
           value={input}
           name="text"
           className="todo-input"
           onChange={handleChange}
           ref={inputRef}
           multiline
           rowsMax={2}
          />
          <button className="todo-button">Add</button>
          </div>
        )}
      </form>
    </div>
  )
}


export default TodoForm;

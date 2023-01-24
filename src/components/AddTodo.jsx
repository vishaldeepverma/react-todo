import { useState } from "react";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  // add todo
  function addtodoHandler() {
    if (!todo) {
      return alert("Invalid todo");
    }
    props.setTodos([
      ...props.todos,
      {
        id: props.todos.length + 1,
        message: todo,
      },
    ]);
    setTodo("");
  }

  // handle onchange event for input
  function onChangeHandler(event) {
    setTodo(event.target.value);
  }
  return (
    <label>
      <input value={todo} onChange={onChangeHandler} />
      <button onClick={addtodoHandler}>Add To Do</button>
    </label>
  );
}

export default AddTodo;

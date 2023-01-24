import { useState, memo } from "react";

function ListItem(props) {
  const [todo, setTodo] = useState(props.todo.message);
  function onChangeHandler(e) {
    setTodo(e.target.value);
  }

  return (
    <tr key={props.todo.id}>
      <td>{props.index + 1}</td>
      <td>
        {!props.todo.edit ? (
          props.todo.message
        ) : (
          <input onChange={onChangeHandler} value={todo} />
        )}
      </td>
      <td>
        <button onClick={() => props.removeTodoHandler(props.todo.id)}>
          Delete
        </button>
        {!props.todo.edit ? (
          <button
            disabled={props.todo.disabled}
            onClick={() => props.editTodo(props.todo.id)}
          >
            Edit
          </button>
        ) : (
          <button onClick={() => props.editTodo(props.todo.id, todo)}>
            Save
          </button>
        )}
      </td>
    </tr>
  );
}

export default memo(ListItem);

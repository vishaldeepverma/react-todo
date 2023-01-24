import { useState, useCallback } from "react";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [todos, setTodos] = useState([]);

  const removeTodoHandler = useCallback(
    function (id) {
      // delete todo
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    },
    [todos]
  );

  const editTodo = useCallback(
    function (id, newValue) {
      if (newValue) {
        console.log(newValue);
        const index = todos.findIndex((todo) => todo.id === id);
        todos[index].message = newValue;
      }
      // map
      const mappedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.edit = !todo.edit;
          return todo;
        }
        todo.disabled = !todo.disabled;
        return todo;
      });

      setTodos(mappedTodos);
    },
    [todos]
  );

  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <ListTodos
        todos={todos}
        removeTodoHandler={removeTodoHandler}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;

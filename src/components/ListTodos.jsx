import ListItem from "./ListItem";

function ListTodo(props) {
  //
  if (!props.todos.length) {
    return <p>Great! There are no todos :D</p>;
  }
  return (
    <table>
      {props.todos.map((todo, index) => (
        <ListItem
          key={todo.id}
          todo={todo}
          index={index}
          removeTodoHandler={props.removeTodoHandler}
          editTodo={props.editTodo}
        />
      ))}
    </table>
  );
}

export default ListTodo;

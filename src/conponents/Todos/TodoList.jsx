import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
  ];

  return (
    <div>
      <h2>TodoList</h2>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;

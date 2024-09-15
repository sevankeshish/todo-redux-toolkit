import { useDispatch } from "react-redux";
import {
  deleteAsyncTodo,
  deleteTodo,
  toggleAsyncTodo,
  toggleTodo,
} from "../../features/todo/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center gap-1">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={(e) =>
              dispatch(toggleAsyncTodo({ id, completed: !completed }))
            }
          />
          <span>{title}</span>
        </span>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteAsyncTodo({ id }))}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

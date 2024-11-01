import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

const TodoItem = ({ todo }: {
    todo: { id: string, title: string };
}) => {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between">
            <span>{todo.title}</span>
            <div>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    id="wd-delete-todo-click"
                >
                    Delete
                </button>
                <button
                    className="btn btn-primary me-2"
                    onClick={() => dispatch(setTodo(todo))}
                    id="wd-edit-todo-click"
                >
                    Edit
                </button>
            </div>
        </li>
    );
}

export default TodoItem;

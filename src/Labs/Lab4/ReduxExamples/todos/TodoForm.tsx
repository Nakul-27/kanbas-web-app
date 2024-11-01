import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";

const TodoForm = () => {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <li className="list-group-item d-flex align-items-center">
            <input
                className="form-control me-2"
                value={todo.title}
                onChange={(e) =>
                    dispatch(setTodo({
                        ...todo,
                        title: e.target.value
                    }))
                }
                placeholder="Enter a task"
            />
            <button
                className="btn btn-warning"
                onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click"
            >
                Update
            </button>
            <button
                className="btn btn-success me-2"
                onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"
            >
                Add
            </button>
        </li>
    );
}

export default TodoForm;

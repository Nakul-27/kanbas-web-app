import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div className="mt-4" style={{ maxWidth: "600px" }}>
            <h2 className="mb-3">Todo List</h2>
            <ul className="list-group mb-3">
                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem
                        todo={todo} />
                ))}
            </ul>
        </div>
    );
};

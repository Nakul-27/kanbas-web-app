import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterReducer";

const CounterRedux = () => {
    const { count } = useSelector((state: any) => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div id="wd-counter-redux">
            <h2>Counter Redux</h2>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}
                id="wd-counter-redux-increment-click">
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}
                id="wd-counter-redux-decrement-click">
                Decrement
            </button>
            <hr />
        </div>
    );
}

export default CounterRedux;
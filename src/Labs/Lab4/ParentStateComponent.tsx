import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

const ParentStateComponent = () => {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <h2>Counter {counter}</h2>
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} />
            <hr />
        </div>
    );
}

export default ParentStateComponent;
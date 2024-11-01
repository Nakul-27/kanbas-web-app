import { useState } from "react";

const ArrayStateVariables = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };

    return (
        <div id="wd-array-state-variables" className="p-3" style={{ maxWidth: "600px" }}>
            <h2 className="mb-3">Array State Variable</h2>
            <button
                onClick={addElement}
                className="btn btn-success w-100 mb-3"
                id="wd-add-element-button"
            >
                Add Element
            </button>
            <ul className="list-group">
                {array.map((item, index) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={index}
                    >
                        <span className="font-weight-bold">{item}</span>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteElement(index)}
                            id="wd-delete-element-click"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ArrayStateVariables;

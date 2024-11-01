import { useState } from "react";

const StringStateVariables = () => {
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input
                className="form-control"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
        </div>
    )
}

export default StringStateVariables;

import { useState } from "react";

const BooleanStateVariables = () => {
    const [done, setDone] = useState(true);

    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>
            <p>{done ? "Done" : "Not Done"}</p>
            <label className="form-control">
                <input type="checkbox"
                    checked={done}
                    onChange={() => setDone(!done)} />
                Done
            </label>
            {done && <div className="alert alert-success">Yay! you are done</div>}
            <hr />
        </div>
    )

}

export default BooleanStateVariables;

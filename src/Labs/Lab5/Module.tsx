import { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Module() {
    const [module, setModule] = useState({
        id: "1",
        name: "Module Name",
        description: "Module Description",
        course: "123"
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
        <div>
            <h3 id="wd-working-with-modules">
                Working With Modules
            </h3>
            <h4>Modifying Properties</h4>
            {/* <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/title/${module.title}`}>
                Update Title
            </a> */}
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />
            <h4>Retrieving Modules</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />
        </div>
    );
}

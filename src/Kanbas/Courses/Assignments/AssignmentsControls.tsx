import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { Navigate, useNavigate } from "react-router";
import ProtectedRouteFaculty from "../../Account/ProtectedRouteFaculty";

export default function AssignmentsControls() {
    const navigate = useNavigate();

    return (
        <div id="wd-assignments-controls" className="d-flex justify-content-end">
            <div
                className="form-control me-5 d-flex nowrap align-items-center"
            >
                <span className="border-0 mb-1 me-1">
                    <CiSearch size={20} />
                </span>
                <input
                    id="wd-search-assignment"
                    placeholder="Search..."
                    className="border-0"
                />
            </div>
            <button id="wd-add-assignment-group"
                className="btn btn-secondary text-nowrap me-2">
                <FaPlus className="me-1" />
                Group
            </button>
            <button id="wd-add-assignment"
                className="btn btn-danger text-nowrap"
                onClick={() => navigate("new")}
            >
                <FaPlus className="me-1" />
                Assignment
            </button>
        </div >
    );
}

import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
export default function Assignments() {
  return (
    <div>
      <div id="wd-assignments">
        <AssignmentsControls /><br /><br />
        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-assignments-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-1 fs-3" />
              <IoMdArrowDropdown className="me-2 fs-5" />
              ASSIGNMENTS
              <AssignmentsControlButtons />
            </div>
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-3 fs-3 text-success" />
                  <div id="wd-a1">
                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                      A1 - ENV + HTML
                    </a>
                    <br />
                    <span className="text-danger me-1">
                      Multiple Modules
                    </span>
                    | <strong>Not available until</strong> May 6 at 12:00am |
                    <span className="ms-1">
                      <strong>Due</strong> May 13 at 11:59pm | 100pts
                    </span>
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <AssignmentControlButtons />
                </div>
              </li>
              <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                <div className="d-flex align-items-center me-auto">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-3 fs-3 text-success" />
                  <div id="wd-a1">
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    <span className="text-danger me-1">
                      Multiple Modules
                    </span>
                    | <strong>Not available until</strong> May 6 at 12:00am |
                    <span className="ms-1">
                      <strong>Due</strong> May 13 at 11:59pm | 100pts
                    </span>
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <AssignmentControlButtons />
                </div>
              </li>
              <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                <div className="d-flex align-items-center me-auto">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-3 fs-3 text-success" />
                  <div id="wd-a1">
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    <span className="text-danger me-1">
                      Multiple Modules
                    </span>
                    | <strong>Not available until</strong> May 6 at 12:00am |
                    <span className="ms-1">
                      <strong>Due</strong> May 13 at 11:59pm | 100pts
                    </span>
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <AssignmentControlButtons />
                </div>
              </li>
            </ul>
          </li >
        </ul>
      </div>
    </div>

  );
}

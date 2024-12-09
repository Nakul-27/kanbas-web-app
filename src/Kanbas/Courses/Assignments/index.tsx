import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { useEffect, useState } from "react";
import * as client from './client';
import * as coursesClient from "../client";
import { useDispatch, useSelector } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentForCourse(cid as string);
    dispatch(setAssignments(assignments));
  }

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId as string);
    dispatch(deleteAssignment(assignmentId));
  }

  useEffect(() => {
    fetchAssignments();
  }, []);
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
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdOutlineAssignment className="me-3 fs-3 text-success" />
                      <div className={`wd-${assignment._id}`}>
                        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          {assignment.title}
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
                      <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={() => removeAssignment(assignment._id)} />
                    </div>
                  </li>
                ))
              }
            </ul>
          </li >
        </ul>
      </div>
    </div>

  );
}

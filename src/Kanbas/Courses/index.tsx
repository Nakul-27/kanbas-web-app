import Modules from "./Modules";
import Home from "./Home";
import { Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import CoursesNavigation from "./Navigation";
import CourseStatus from "./Home/Status";
import PeopleTable from "./People/Table";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 id="wd-course-title" className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234</h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>

        <div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}

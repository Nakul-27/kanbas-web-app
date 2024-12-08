import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import AssignmentEditor from "./Courses/Assignments/Editor";
// import * as db from "./Database";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import Session from "./Account/Session";
import { useSelector } from "react-redux";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
        image: "images/reactjs.jpg"
    });
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
        try {
            const courses = await userClient.findMyCourses();
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, newCourse]);
    };
    const deleteCourse = async (courseId: any) => {
        const status = await client.deleteCourse(courseId);
        setCourses(courses.filter(
            (course) => course._id !== courseId)
        );
    };
    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);
    return (
        <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
                        <Route path="/Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="/Calendar/*" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox/*" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </Session>
    );
}

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
    const location = useLocation();

    return (
        <div
            id="wd-kanbas-navigation"
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
            style={{ width: 110 }}>
            <a id="wd-neu-link"
                target="_blank"
                className="list-group-item bg-black border-0 text-center"
                href="https://www.northeastern.edu/"
                rel="noreferrer">
                <img src="/images/NEU.png" alt="Northeastern Logo" width="75px" />
            </a>

            <NavLink to="/Kanbas/Account"
                id="wd-account-link"
                className="list-group-item text-center border-0 bg-black text-white">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account
            </NavLink>

            <NavLink id="wd-dashboard-link"
                to="/Kanbas/Dashboard"
                className={({ isActive }) =>
                    isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"} >
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </NavLink >

            <NavLink id="wd-course-link"
                to="/Kanbas/Courses/1234/Home"
                className={({ isActive }) =>
                    isActive || location.pathname.includes('/Kanbas/Courses/')
                        ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"
                } >
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </NavLink>

            <NavLink id="wd-calendar-link"
                to="/Kanbas/Calendar"
                className={({ isActive }) =>
                    isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </NavLink>

            <NavLink id="wd-inbox-link"
                to="/Kanbas/Inbox"
                className={({ isActive }) =>
                    isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </NavLink>

            <NavLink id="wd-labs-link"
                to="/Labs"
                className={({ isActive }) =>
                    isActive ? "list-group-item text-center border-0 bg-white text-danger" : "list-group-item text-center border-0 bg-black text-white"}>
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </NavLink>
        </div >
    );
}

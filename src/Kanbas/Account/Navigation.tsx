import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    const { pathname } = useLocation();
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 pe-3 rounded-0">
            {links.map((link) => (
                <NavLink
                    key={link}
                    to={`/Kanbas/Account/${link}`}
                    className={({ isActive }) =>
                        isActive
                            ? "list-group-item active border border-0"
                            : "list-group-item text-danger border border-0"
                    }
                >
                    {link}
                </NavLink>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <NavLink
                    to={`/Kanbas/Account/Users`}
                    className={({ isActive }) =>
                        isActive
                            ? "list-group-item active border border-0"
                            : "list-group-item text-danger border border-0"
                    }
                >
                    Users
                </NavLink>
            )}
        </div>
    );
}

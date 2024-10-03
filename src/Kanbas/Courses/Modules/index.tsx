import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
            {/* <button id="wd-collapse-all" onClick={() => alert("Collapsing")} type="button">
                Collapse All
            </button>
            <button id="wd-view-progress" onClick={() => alert("View Progress")} type="button">
                View Progress
            </button>
            <button id="wd-add-module" onClick={() => alert("Add Module")} type="button">
                +Module
            </button> */}
            <ModulesControls /> <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        WEEK 1
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            INTRODUCTION TO THE COURSE
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARN WHAT IS WEB DEVELOPMENT
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LESSON 1: Creating a development environment
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LESSON 2: Creating a Web Application
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li >

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        WEEK 2
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 cs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 cs-3" />
                            LESSON 1: Learn how to create user interfaces with HTML
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 cs-3" />
                            LESSON 2: Deploy to Netlify
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul >
        </div >
    );
}


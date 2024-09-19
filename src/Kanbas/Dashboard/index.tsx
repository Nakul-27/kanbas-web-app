export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course"> 
                    <img src="/images/TDD.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2345/Home">
                            CS2345 TDD
                        </a>
                        <p className="wd-dashboard-course-title">
                            Test Driven Development 
                        </p>
                        <a href="#/Kanbas/Courses/2345/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/webdev.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/3456/Home">
                            CS3456 Web Development 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Web Development 
                        </p>
                        <a href="#/Kanbas/Courses/3456/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/AI.jpeg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/4567/Home">
                            CS4567 Artificial Intelligence 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Artificial Intelligence 
                        </p>
                        <a href="#/Kanbas/Courses/4567/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/deeplearning.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/5678/Home">
                            CS5678 Deep Learning 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Deep Learning 
                        </p>
                        <a href="#/Kanbas/Courses/5678/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/musictheory.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/6789/Home">
                            CS6789 Music Theory 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Music Theory 
                        </p>
                        <a href="#/Kanbas/Courses/6789/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/LLM.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/7890/Home">
                            CS7890 Large Language Models 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Large Language Models 
                        </p>
                        <a href="#/Kanbas/Courses/7890/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/timemanagement.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/8901/Home">
                            CS8901 Time Management 
                        </a>
                        <p className="wd-dashboard-course-title">
                            Time Management 
                        </p>
                        <a href="#/Kanbas/Courses/8901/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

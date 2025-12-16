import './TasksSidebar.css';
import TasksIcon from './icons/TasksIcon.js';
import StarIcon from './icons/StarIcon.js';

export default function TasksSidebar() {



    return (
        <section className="tasks-sidebar">
            <nav>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <button className="btn sidebar-item-btn">
                            <div className="sidebar-item-icon center">
                                <TasksIcon />
                            </div>
                            <span className="sidebar-item-text">
                                All tasks
                            </span>
                        </button>
                    </li>
                    <li className="sidebar-list-item">
                        <button className="btn sidebar-item-btn">
                            <div className="sidebar-item-icon center">
                                <StarIcon />
                            </div>
                            <span className="sidebar-item-text">
                                Important Tasks
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}   
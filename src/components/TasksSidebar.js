import './TasksSidebar.css';
import TasksIcon from './icons/TasksIcon.js';
import StarIcon from './icons/StarIcon.js';
import { useTasks } from '../contexts/TasksProvider.js';

export default function TasksSidebar({onListChange, selectedList}) {
    const tasks = useTasks();
    const importantTasks = tasks.filter(task => task.important);

    const defaultClasses="sidebar-list-item";
    const selectedClasses="sidebar-list-item selected-item";

    return (
        <section className="tasks-sidebar">
            <nav>
                <ul className="sidebar-list">
                    <li className={selectedList === "all" ? selectedClasses : defaultClasses}>
                        <button className="btn sidebar-item-btn"
                        onClick={() => onListChange("all")}>
                            <div className="sidebar-item-icon center">
                                <TasksIcon />
                            </div>
                            <span className="sidebar-item-text">
                                All tasks
                            </span>
                            <span className="sidebar-item-number">
                                {tasks.length}
                            </span>
                        </button>
                    </li>
                    <li className={selectedList === "important" ? selectedClasses : defaultClasses}>
                        <button className="btn sidebar-item-btn" 
                        onClick={() => onListChange("important")}>
                            <div className="sidebar-item-icon center">
                                <StarIcon />
                            </div>
                            <span className="sidebar-item-text">
                                Important Tasks
                            </span>
                            <span className="sidebar-item-number">
                                {importantTasks.length}
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}   
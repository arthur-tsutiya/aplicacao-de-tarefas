import './Task.css';
import CheckmarkButton from './CheckmarkButton.js';

export default function Task({task, onTaskToggle, onEditClick, onTaskDelete, onTaskImportanceToggle}) {

    let taskClassName = "task card";
    if (task.done) {
        taskClassName += " task-done";
    }
    if (task.important) {
        taskClassName += " task-important";
    }

    return (
        <li className={taskClassName}>
            <button onClick={() => onTaskToggle(task.id)}>done</button>
            <p className="task-title">{task.title}</p>
            <div className="task-buttons">
                <button onClick={() => onEditClick(task.id)}>Edit</button>
                <button onClick={() => onTaskDelete(task.id)}>Delete</button>
                <button className="btn-important-task" onClick={() => onTaskImportanceToggle(task.id)}>Favorite</button>
            </div>
            <CheckmarkButton checked="true"/>
        </li>
    );
}
import './Task.css';

export default function Task({task, onTaskToggle, onEditClick, onTaskDelete}) {

    let taskClassName = "task-title";
    if (task.done) {
        taskClassName += " done-task";
    }

    return (
        <li className="task card">
            <button onClick={() => onTaskToggle(task.id)}>done</button>
            <p className={taskClassName}>{task.description}</p>
            <div className="task-buttons">
                <button onClick={() => onEditClick(task.id)}>Edit</button>
                <button onClick={() => onTaskDelete(task.id)}>Delete</button>
                <button className="btn-important-task" onClick={() => {}}>Favorite</button>
            </div>
        </li>
    );
}
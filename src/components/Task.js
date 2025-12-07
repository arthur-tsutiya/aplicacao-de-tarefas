import './Task.css';

export default function Task({task, onTaskToggle, onEditClick, onTaskDelete}) {

    let taskClassName = "";
    if (task.done) {
        taskClassName += "done-task";
    }

    return (
        <li className="task card">
            <button onClick={() => onTaskToggle(task.id)}>done</button>
            <p className={taskClassName}>{task.description}</p>
            <button onClick={() => onEditClick(task.id)}>Edit</button>
            <button onClick={() => onTaskDelete(task.id)}>Delete</button>
        </li>
    );
}
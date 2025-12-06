import './Task.css';

export default function Task({task, onTaskToggle}) {

    let taskClassName = "";
    if (task.done) {
        taskClassName += "done-task";
    }

    return (
        <li className="task card">
            <button onClick={() => onTaskToggle(task.id)}>done</button>
            <p className={taskClassName}>{task.description}</p>
        </li>
    );
}
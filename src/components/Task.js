import './Task.css';
import CheckmarkButton from './CheckmarkButton.js';
import StarButton from './StarButton.js';
import EditButton from './controls/EditButton.js';
import DeleteButton from './controls/DeleteButton.js';

export default function Task({task, onTaskToggle, onEditClick, onTaskDelete, onTaskImportanceToggle}) {

    let taskClassName = "task card";
    if (task.done) {
        taskClassName += " task-done";
    }
    if (task.important) {
        taskClassName += " task-important";
    }

    return (
        <li tab-index="1" className={taskClassName}>
            <CheckmarkButton onClick={() => onTaskToggle(task.id)} checked={task.done}/>
            <p className="task-title">{task.title}</p>
            <div className="task-buttons">
                <DeleteButton onClick={() => onTaskDelete(task.id)} />
                <StarButton onClick={() => onTaskImportanceToggle(task.id)} toggled={task.important}/>
            </div>
        </li>
        
    );
}
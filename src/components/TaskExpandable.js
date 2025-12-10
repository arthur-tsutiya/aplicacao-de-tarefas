import './TaskExpandable.css';
import CheckmarkButton from './CheckmarkButton.js';
import StarButton from './StarButton.js';
import EditButton from './controls/EditButton.js';
import DeleteButton from './controls/DeleteButton.js';
import { useState} from 'react';

export default function TaskExpandable({task, onTaskToggle, onEditClick, onTaskDelete, onTaskImportanceToggle}) {
    const [expanded, setExpanded] = useState(false);


    let taskClassName = "task-expandable card";
    /*
    if (task.done) {
        taskClassName += " task-done";
    }
    if (task.important) {
        taskClassName += " task-important";
    }
        */
    if (expanded) {
        taskClassName += " expanded";
    }



    return (
        <li className={taskClassName}>
            <div className="task-expandable-visible">
                <CheckmarkButton onClick={() => {}} checked={task.done}/>
                <button className="btn" onClick={() => setExpanded(c => !c)}><p className="task-title">{task.title}</p></button>
                <div className="task-buttons">
                    <EditButton onClick={() => onEditClick(task.id)}/>
                    <DeleteButton onClick={() => onTaskDelete(task.id)} />
                    <StarButton onClick={() => onTaskImportanceToggle(task.id)} toggled={task.important}/>
                </div>
            </div>
            <div className="task-expandable-hidden">
                <div className="task-expandable-hidden-content"><p>supposed to be hidden</p></div>
            </div>
        </li>
        
    );
}
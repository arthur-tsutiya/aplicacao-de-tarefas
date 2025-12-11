import './TaskExpandable.css';
import CheckmarkButton from './CheckmarkButton.js';
import StarButton from './StarButton.js';
import EditButton from './controls/EditButton.js';
import DeleteButton from './controls/DeleteButton.js';
import { useState} from 'react';

export default function TaskExpandable({task, onTaskToggle, onEditClick, onTaskDelete, onTaskImportanceToggle,
    onTaskSelection, onTaskSelectionEnd, expanded
}) {

    let taskClassName = "task-expandable card";
    
    if (task.done) {
        taskClassName += " task-done";
    }
    if (task.important) {
        taskClassName += " task-important";
    }
    if (expanded) {
        taskClassName += " expanded";
    }

    function toggleExpand() {
        if (expanded) {
            onTaskSelectionEnd(task.id);
        } else {
            onTaskSelection(task.id);
        }
    }


    return (
        <li className={taskClassName}>
            <div className="task-expandable-visible center">
                <CheckmarkButton onClick={() => onTaskToggle(task.id)} checked={task.done}/>
                <button className="btn btn-task" onClick={toggleExpand}>
                    <p className="task-title center">{task.title}</p>
                </button>
                <div className="task-buttons">
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
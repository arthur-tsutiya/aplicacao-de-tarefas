import './TaskExpandable.css';
import CheckmarkButton from './CheckmarkButton.js';
import StarButton from './StarButton.js';
import EditButton from './controls/EditButton.js';
import DeleteButton from './controls/DeleteButton.js';
import EditIcon from './icons/EditIcon.js';
import TasksIcon from './icons/TasksIcon.js';
import TextInput from './TextInput.js'
import TextInputStaggered from './forms/TextInputStaggered.js';
import { useState, useEffect } from 'react';

export default function TaskExpandable({task, onTaskToggle, onTaskChange, onTaskDelete, onTaskImportanceToggle,
    onTaskSelection, onTaskSelectionEnd, expanded, moved}) {

    let taskClassName = "task-expandable card";

    useEffect(() => {
        if (moved) {
            let {moved, ...newTask} = task;
            onTaskChange(newTask);
        }
    }, [moved]);
    
    if (task.done) {
        taskClassName += " task-done";
    }
    if (task.important) {
        taskClassName += " task-important";
    }
    if (expanded) {
        taskClassName += " expanded";
    }
    if (moved) {
        taskClassName += " task-initial";
    }

    function toggleExpand() {
        if (expanded) {
            onTaskSelectionEnd(task.id);
        } else {
            onTaskSelection(task.id);
        }
    }

    function editTitle(newTitle) {
        if (!newTitle.length > 0) {
            return;
        }

        let newTask = {...task, title: newTitle}

        onTaskChange(newTask);
    }


    return (
        <li className={taskClassName}>
            <div className="task-expandable-visible center">
                <CheckmarkButton onClick={() => onTaskToggle(task.id)} checked={task.done}/>
                <button className="btn btn-task" onClick={toggleExpand}>
                    <p className="task-title center">{task.title}</p>
                </button>
                <div className="task-buttons">
                    <StarButton onClick={() => onTaskImportanceToggle(task.id)} toggled={task.important}/>
                </div>
            </div>
            <div className="task-expandable-hidden">
                <div className="task-expandable-hidden-content">
                    <p className="task-field field-upper-border" role="region">
                        <span className="task-form-icon icon-title center">
                            <EditIcon />
                        </span>
                        <label className="task-form-label">
                            <span className="task-field-label-text">What is the title of your task?</span>
                            <TextInputStaggered name="task-title" className="task-title-input" expanded={expanded} 
                            value={task.title} onChange={editTitle} validationPredicate={(text) => text.length > 0}/>
                        </label>
                    </p>
                    <div className="task-form-controls field-upper-border">
                        <DeleteButton className="task-form-btn-delete" onClick={() => {
                            onTaskDelete(task.id);
                        }} expanded={expanded}/>
                    </div>
                </div>
            </div>
        </li>
        
    );
}
/*;*/
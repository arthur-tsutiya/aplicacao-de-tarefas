import './TaskFields.css';
import TagIcon from './icons/TagIcon.js';
import NoteIcon from './icons/NoteIcon.js';
import EditIcon from './icons/EditIcon.js';
import TextInput from './TextInput.js';
import {useState} from 'react';

export default function TaskFields({title, setTitle, onTaskCreate, expanded}) {

    function submitClick(e) {
        e.preventDefault();
        onTaskCreate();
    }

    return (
        <form className="task-form" onSubmit={submitClick}>
            <p className="task-field" role="region">
                <span className="task-form-icon icon-title center">
                    <EditIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text">What is the title of your task?</span>
                    <TextInput name="task-title" className="task-title-input" expanded={expanded} title={title}
                    setTitle={setTitle} placeholder="Water the plants..."/>
                </label>
            </p>
            <p className="task-field" role="region">
                <span className="task-form-icon icon-tag center">
                    <TagIcon />
                </span>
                <label className="task-form-label wip">
                    <span className="task-field-label-text wip center">Add Category (WIP)</span>
                    
                </label>
            </p>
            <p className="task-field" role="region">
                <span className="task-form-icon icon-notes center">
                    <NoteIcon />
                </span>
                <label className="task-form-label wip">
                    <span className="task-field-label-text center">Add Notes (WIP)</span>
                    
                </label>
            </p>
            <div className="task-form-controls">
                <input type="submit" className="btn task-form-btn-add btn-primary" value="Add task"
                 tabIndex={expanded ? 0 : -1}/>
            </div>
        </form>
    );
}

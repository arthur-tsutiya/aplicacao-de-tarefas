import './TaskFields.css';
import TagIcon from './icons/TagIcon.js';
import NoteIcon from './icons/NoteIcon.js';
import EditIcon from './icons/EditIcon.js';
import TextInput from './forms/TextInput.js';
import StarButton from './controls/StarButton.js';
import {useState} from 'react';

export default function TaskFields({title, setTitle, important, setImportant, onTaskCreate, expanded, errorMessage}) {

    function submitClick(e) {
        e.preventDefault();
        onTaskCreate();
    }

    function changeTitle(newTitle) {
        setTitle(newTitle);
    }

    return (
        <form className="task-form" onSubmit={submitClick}>
            <p className="task-field field-upper-border" role="region">
                <span className="task-form-icon icon-title center">
                    <EditIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text">What is the title of your task?</span>
                    <TextInput name="task-title" className="task-title-input" expanded={expanded} value={title}
                    onChange={changeTitle} placeholder="Water the plants..."/>
                    {errorMessage && <span className="error-message">{errorMessage}</span>}
                </label>
            </p>
            <p className="task-field field-upper-border" role="region">
                <span className="task-form-icon icon-tag center">
                    <TagIcon />
                </span>
                <span className="task-form-label wip">
                    <span className="task-field-label-text wip center">Add Category (WIP)</span>
                    
                </span>
            </p>
            <p className="task-field field-upper-border" role="region">
                <span className="task-form-icon icon-notes center">
                    <NoteIcon />
                </span>
                <span className="task-form-label wip">
                    <span className="task-field-label-text center">Add Notes (WIP)</span>
                    
                </span>
            </p>
            <div className="task-form-controls field-upper-border">
                <div className="task-form-controls-extra">
                    <StarButton className="task-form-btn-important" toggled={important}
                    tabIndex={expanded ? 0 : -1}
                    onClick={(e) => {
                        e.preventDefault();
                        setImportant(i => !i);
                    }}/>
                </div>
                <input type="submit" className="btn task-form-btn-add btn-primary" value="Add task"
                 tabIndex={expanded ? 0 : -1} disabled={title.length > 0 ? false : true}/>
            </div>
        </form>
    );
}

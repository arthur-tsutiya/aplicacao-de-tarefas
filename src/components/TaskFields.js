import './TaskFields.css';
import TagIcon from './icons/TagIcon.js';
import NoteIcon from './icons/NoteIcon.js';
import EditIcon from './icons/EditIcon.js';
import TextInput from './TextInput.js';

export default function TaskFields() {

    return (
        <form className="task-form">
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-title center">
                    <EditIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text">What is the name of your task?</span>
                    <TextInput name="task-title" className="task-title-input"/>
                </label>
            </div>
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-tag center">
                    <TagIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text wip center">Add Category (WIP)</span>
                </label>
            </div>
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-notes center">
                    <NoteIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text center">Add Notes (WIP)</span>
                </label>
            </div>
        </form>
    );
}

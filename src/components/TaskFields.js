import './TaskFields.css';
import TagIcon from './icons/TagIcon.js';
import NoteIcon from './icons/NoteIcon.js';
import TextInput from './TextInput.js';

export default function TaskFields() {

    return (
        <form className="task-form">
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-title center"></span>
                <label className="task-form-label">
                    <span className="task-field-label-text">What is the name of your task?</span>
                    <input name="task-title" type="text"/>
                    <TextInput name="task-title"/>
                </label>
            </div>
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-tag center">
                    <TagIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text center">Add Category (WIP)</span>
                    <p className="author-note">Feature not implemented yet.</p>
                </label>
            </div>
            <div className="task-fieldset" role="region">
                <span className="task-form-icon icon-notes center">
                    <NoteIcon />
                </span>
                <label className="task-form-label">
                    <span className="task-field-label-text center">Add Note</span>
                    <textarea name="task-title"/>
                </label>
            </div>
        </form>
    );
}

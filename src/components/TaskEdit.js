import './TaskEdit.css';
import { useState } from 'react';

export default function TaskEdit({task, onTaskChange, onTaskEditEnd, onTaskImportanceToggle}) {
    const [taskTitle, setTaskTitle] = useState(task.title);
    const [errorMessage, setErrorMessage] = useState(null);

    let newTask = {...task, title: taskTitle};

    function saveChanges() {
        if (taskTitle === "") {
            setErrorMessage("The title must not be empty");
            return;
        }
        setErrorMessage(null);
        onTaskChange(newTask);
        onTaskEditEnd();
    }

    function discardChanges() {
        setErrorMessage(null);
        onTaskEditEnd();
    }

    return (
        <li className="task card task-edit">
            <label>
                Title
                <input name="task-title" type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
                {errorMessage && <p className="title-error-message">{errorMessage}</p>}
                <div className="task-edit-buttons">
                    <button onClick={saveChanges}>Save changes</button>
                    <button onClick={discardChanges}>Discard changes</button>
                </div>
            </label>
        </li>
    );
}
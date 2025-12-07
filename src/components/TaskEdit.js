import './TaskEdit.css';
import { useState } from 'react';

export default function TaskEdit({task, onTaskChange, onTaskEditEnd}) {
    const [taskTitle, setTaskTitle] = useState(task.description);

    let newTask = {...task, description: taskTitle};

    function saveChanges() {
        onTaskChange(newTask);
        onTaskEditEnd();
    }

    function discardChanges() {
        onTaskEditEnd();
    }

    return (
        <li className="task card task-edit">
            <label>
                Title
                <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)}/>
                <div className="task-edit-buttons">
                    <button onClick={saveChanges}>Save changes</button>
                    <button onClick={discardChanges}>Discard changes</button>
                </div>
            </label>
        </li>
    );
}

import { useState } from 'react';

export default function TaskNew({onTaskAdd, onFinishedTaskAdd}) {
    const [title, setTitle] = useState("");

    let newTask = {
        id: null,
        description: title,
        done: false
    }

    function createTask() {
        onTaskAdd(newTask);
        onFinishedTaskAdd();
    }

    function cancelCreateTask() {
        onFinishedTaskAdd();
    }

    return (
        <div className="task card task-edit">
            <label>
                Title
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <div className="task-edit-buttons">
                    <button onClick={createTask}>Create Task</button>
                    <button onClick={cancelCreateTask}>Cancel</button>
                </div>
            </label>
        </div>
    );
}
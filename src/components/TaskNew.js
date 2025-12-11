
import { useState } from 'react';
import './TaskNew.css';

export default function TaskNew({onTaskAdd, onFinishedTaskAdd}) {
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    let newTask = {
        id: null,
        title: title,
        done: false,
        important: false,
    }

    function createTask() {
        if (title === "") {
            setErrorMessage("The title must not be empty");
            return;
        } 
        setErrorMessage(null);
        onTaskAdd(newTask);
        onFinishedTaskAdd();
       
    }

    function cancelCreateTask() {
        setErrorMessage(null);
        onFinishedTaskAdd();
    }

    return (
        <div className="task card task-edit">
            <label>
                Title
                <input name="task-name" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                {errorMessage && <p className="title-error-message">{errorMessage}</p>}
                <div className="task-edit-buttons">
                    <button onClick={createTask}>Create Task</button>
                    <button onClick={cancelCreateTask}>Cancel</button>
                </div>
            </label>
        </div>
    );
}
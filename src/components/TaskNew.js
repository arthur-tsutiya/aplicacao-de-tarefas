
import { useState } from 'react';
import './TaskNew.css';
import TaskFields from './TaskFields.js';

export default function TaskNew({onTaskAddBegin, onTaskAdd, onFinishedTaskAdd, expanded}) {
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    let newTask = {
        id: null,
        title: title,
        done: false,
        important: false,
    }

    let className = "task card task-new";
    if (expanded) {
        className += " expanded";
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

    function toggleTaskAdd() {
        if (expanded) {
            onFinishedTaskAdd();
        } else {
            onTaskAddBegin();
        }
    }

    return (
        <div className={className}>
            <div className="task-new-visible">
                <button className="btn task-new-btn" onClick={toggleTaskAdd}>
                    <span className="task-new-icon center">
                        <svg viewBox="0 0 100 99.997009" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 47.760256,0 C 45.531579,0 43.7356,1.7929882 43.7356,4.0216643 V 43.7356 H 4.0246565 C 1.7959788,43.7356 0,45.528588 0,47.757264 v 4.482481 c 0,2.228676 1.7959788,4.021665 4.0246565,4.021665 H 43.7356 v 39.713935 c 0,2.228676 1.795979,4.021664 4.024656,4.021664 h 4.479488 c 2.228677,0 4.024656,-1.792988 4.024656,-4.021664 V 56.26141 H 95.975344 C 98.204021,56.26141 100,54.468421 100,52.239745 V 47.757264 C 100,45.528588 98.204021,43.7356 95.975344,43.7356 H 56.2644 V 4.0216643 C 56.2644,1.7929882 54.468421,0 52.239744,0 Z" />
                        </svg>
                    </span>
                    Add task
                </button>
            </div>
            <div className="task-new-hidden">
                <div className="task-new-hidden-content">
                    <TaskFields/>
                </div>
            </div>
        </div>
    );
}
/*
                    <label>
                        Title
                        <input name="task-name" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                        {errorMessage && <p className="title-error-message">{errorMessage}</p>}
                        <div className="task-edit-buttons">
                            <button onClick={() => {}} disabled={title.length === 0}>Create Task</button>
                            <button onClick={() => {}}>Cancel</button>
                        </div>
                    </label>*/
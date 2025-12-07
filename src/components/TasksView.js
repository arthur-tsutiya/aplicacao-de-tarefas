import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange}) {
    const [editedTaskId, setEditedTaskId] = useState(null);

    function editTask(id) {
      setEditedTaskId(id);
    }

    function finishEditTask() {
      setEditedTaskId(null);
    }

    return (
      <section className="tasks-view">
        <ul className="tasks-list">
            {tasks.map(task => {
                if (editedTaskId === task.id) return <TaskEdit task={task} onTaskChange={onTaskChange} onTaskEditEnd={finishEditTask}/>;
                return <Task key={task.id} task={task} onTaskToggle={onTaskToggle} onEditClick={editTask}/>;
            })}
        </ul>
        <TaskEdit task={{id: 9, description: 'text', done: false}}/>
        <button>Add task</button>
      </section>
    );
}
import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import TaskExpandable from './TaskExpandable.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle}) {
    const [status, setStatus] = useState({});

    function startCreatingTask() {
      setStatus({action: 'create'});
    }

    function finishCreatingTask() {
      setStatus({});
    }

    function expandTask(id) {
      setStatus({action: 'expand', id: id});
    }

    function collapseTask(id) {
      setStatus({});
    }

    return (
      <section className="tasks-view">
        <TaskNew onTaskAddBegin={startCreatingTask} onTaskAdd={onTaskAdd} onFinishedTaskAdd={finishCreatingTask} expanded={status.action === "create"}/>
        <ul className="tasks-list">
            {
              tasks.map(task => {
                  return <TaskExpandable key={task.id} task={task} onTaskToggle={onTaskToggle} 
                    onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle} 
                    onTaskSelection={expandTask} onTaskSelectionEnd={collapseTask} onTaskChange={onTaskChange} 
                    expanded={(status.action === "expand" && task.id === status.id)}
                    moved={task.moved}/>;
              })
            }
        </ul>
      </section>
    );
}
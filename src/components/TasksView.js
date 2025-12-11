import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import TaskExpandable from './TaskExpandable.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle}) {
    const [editedTaskId, setEditedTaskId] = useState(null);
    const [newTask, setNewTask] = useState(false);
    const [status, setStatus] = useState({});
/*
    const importantTasks = [];
    const regularTasks = [];
    tasks.forEach(task => {

        let element = <Task key={task.id} task={task} onTaskToggle={onTaskToggle} onEditClick={editTask} onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle}/>;
        if (task.id === editedTaskId) {
          element = <TaskEdit key={task.id} task={task} onTaskChange={onTaskChange} onTaskEditEnd={finishEditTask} onTaskImportanceToggle={onTaskImportanceToggle}/>;
        }

      if (task.important) {
        importantTasks.push(element);
      } else {
        regularTasks.push(element);
      }
    }); */

    function editTask(id) {
      setEditedTaskId(id);
      /*setStatus({action: 'editing', id: id});*/
    }

    function finishEditTask() {
      setEditedTaskId(null);
      /*setStatus({});*/
    }

    function createTask() {
      setNewTask(true);
      /*setStatus({action: 'creating'});*/
    }

    function finishCreatingTask() {
      setNewTask(false);
      /*setStatus({});*/
    }

    return (
      <section className="tasks-view">
        {status.action === 'creating' ? <TaskNew onTaskAdd={onTaskAdd} onFinishedTaskAdd={finishCreatingTask} /> : <button className="task card card-btn" onClick={createTask}>Add task</button>}
        <ul className="tasks-list">
            {
              tasks.toReversed().map(task => {
                if (status.action === "editing" && task.id === status.id) {
                  return <TaskEdit key={task.id} task={task} onTaskChange={onTaskChange} onTaskEditEnd={finishEditTask} onTaskImportanceToggle={onTaskImportanceToggle}/>;
                 /* return <TaskExpandable key={task.id} task={task} onTaskToggle={onTaskToggle} 
                    onEditClick={editTask} onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle} 
                    onTaskSelection={} onTaskSelectionEnd={} expanded="true"/>;*/
                }
                return <TaskExpandable key={task.id} task={task} onTaskToggle={onTaskToggle} onEditClick={editTask} onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle}/>;
              })
            }
        </ul>
      </section>
    );
}
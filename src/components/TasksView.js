import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import TaskExpandable from './TaskExpandable.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle}) {
    /*const [editedTaskId, setEditedTaskId] = useState(null);*/
    /*const [newTask, setNewTask] = useState(false);*/
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

/*
    function editTask(id) {
      setEditedTaskId(id);
      setStatus({action: 'editing', id: id});
    }
*/
/*
    function finishEditTask() {
      setEditedTaskId(null);
      setStatus({});
    }
*/

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
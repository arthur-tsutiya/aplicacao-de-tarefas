import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle}) {
    const [editedTaskId, setEditedTaskId] = useState(null);
    const [newTask, setNewTask] = useState(false);

    const importantTasks = [];
    const regularTasks = [];
    tasks.forEach(task => {

        let element = <Task key={task.id} task={task} onTaskToggle={onTaskToggle} onEditClick={editTask} onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle}/>;
        if (task.id === editedTaskId) {
          element = <TaskEdit task={task} onTaskChange={onTaskChange} onTaskEditEnd={finishEditTask} onTaskImportanceToggle={onTaskImportanceToggle}/>;
        }

      if (task.important) {
        importantTasks.push(element);
      } else {
        regularTasks.push(<Task key={task.id} task={task} onTaskToggle={onTaskToggle} onEditClick={editTask} onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle}/>);
      }
    }); 

    function editTask(id) {
      setEditedTaskId(id);
    }

    function finishEditTask() {
      setEditedTaskId(null);
    }

    function createTask() {
      setNewTask(true);
    }

    function finishCreatingTask() {
      setNewTask(false);
    }

    return (
      <section className="tasks-view">
        {newTask === true ? <TaskNew onTaskAdd={onTaskAdd} onFinishedTaskAdd={finishCreatingTask} /> : <button className="task card card-btn" onClick={createTask}>Add task</button>}
        <ul className="tasks-list">
            {importantTasks}
            {regularTasks}
        </ul>
      </section>
    );
}
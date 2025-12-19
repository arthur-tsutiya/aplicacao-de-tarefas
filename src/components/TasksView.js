import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import TaskExpandable from './TaskExpandable.js';
import TasksIcon from './icons/TasksIcon.js';
import StarIcon from './icons/StarIcon.js'
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle, 
  onTaskAddBegin, onTaskAddEnd, onTaskExpand, onTaskCollapse, status, selectedList
}) {

  let heading = "All Tasks";

  switch(selectedList) {
    case "important": {
      heading = "Important Tasks";
      break;
    }
  }
    
    return (
      <section className="tasks-view">
        <div className="tasks-view-wrapper">
          <h1 className="tasks-view-heading">{heading}</h1>
          <TaskNew key={selectedList} onTaskAddBegin={onTaskAddBegin} onTaskAdd={onTaskAdd} onFinishedTaskAdd={onTaskAddEnd}
          expanded={status.action === "create"} defaultImportant={selectedList === "important"} />
          <ul className="tasks-list">
            { tasks.length === 0 && <p className="no-tasks-message">No tasks yet.</p>}
            {
              tasks.map(task => {
                  return <TaskExpandable key={task.id} task={task} onTaskToggle={onTaskToggle} 
                    onTaskDelete={onTaskDelete} onTaskImportanceToggle={onTaskImportanceToggle} 
                    onTaskSelection={onTaskExpand} onTaskSelectionEnd={onTaskCollapse} onTaskChange={onTaskChange} 
                    expanded={(status.action === "expand" && task.id === status.id)}
                    moved={task.moved}/>;
              })
            }
          </ul>
        </div>
      </section>
    );
}
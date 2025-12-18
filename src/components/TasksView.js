import './TasksView.css';
import Task from './Task.js';
import TaskEdit from './TaskEdit.js';
import TaskNew from './TaskNew.js';
import TaskExpandable from './TaskExpandable.js';
import { useState } from 'react';

export default function TasksView({tasks, onTaskToggle, onTaskChange, onTaskDelete, onTaskAdd, onTaskImportanceToggle, 
  onTaskAddBegin, onTaskAddEnd, onTaskExpand, onTaskCollapse, status, selectedList
}) {
    
    return (
      <section className="tasks-view">
        <TaskNew onTaskAddBegin={onTaskAddBegin} onTaskAdd={onTaskAdd} onFinishedTaskAdd={onTaskAddEnd}
        expanded={status.action === "create"} defaultImportant={selectedList === "important"} />
        <ul className="tasks-list">
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
      </section>
    );
}
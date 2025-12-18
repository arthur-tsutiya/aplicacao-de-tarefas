import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useTasks, useTasksDispatch } from './contexts/TasksProvider.js';
import { useState } from 'react';

export default function Tasks({footerDisplay, setFooterDisplay}) {
    const tasks = useTasks();
    const tasksDispatch = useTasksDispatch();
    const [selectedList, setSelectedList] = useState("all");
    const [status, setStatus] = useState({});

    if (footerDisplay) {
        setFooterDisplay(false);
    }

    let selectedTasks = selectedList === "important" ? tasks.filter(task => task.important) : tasks;

    function changeList(newList) {
        setSelectedList(newList);
    }

    function toggleTask(id) {
        tasksDispatch({
            type: "toggle_done",
            id: id
        });
    }

    function toggleTaskImportance(id) {
        tasksDispatch({
            type: "toggle_importance",
            id: id
        });
    }

    function editTask(newTask) {
        tasksDispatch({
            type: "edit_task",
            task: newTask
        });
    }

    function removeTask(id) {
        tasksDispatch({
            type: "remove_task",
            id: id
        });
    }

    function addTask(newTask) {
        tasksDispatch({
            type: "add_task",
            task: newTask
        });
    }

    function startCreatingTask() {
      setStatus({action: 'create'});
    }

    function finishCreatingTask() {
      setStatus({});
    }

    function expandTask(id) {
      setStatus({action: 'expand', id: id});
    }

    function collapseTask() {
      setStatus({});
    }

    return (
    <main className="main-page tasks-wrapper">
        <TasksSidebar onListChange={(newList) => {
            if (newList === selectedList) return;
            changeList(newList);
            collapseTask();
        }} selectedList={selectedList} />
        <TasksView tasks={selectedTasks} onTaskToggle={toggleTask} onTaskChange={editTask} onTaskDelete={removeTask} onTaskAdd={addTask}
        onTaskImportanceToggle={toggleTaskImportance} onTaskAddBegin={startCreatingTask} onTaskAddEnd={finishCreatingTask}
        onTaskExpand={expandTask} onTaskCollapse={collapseTask} status={status} selectedList={selectedList}/>
    </main>
    );
}


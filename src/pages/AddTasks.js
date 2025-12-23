import TasksSidebar from '../components/TasksSidebar';
import TasksView from '../components/TasksView'; 
import './AddTasks.css';
import { useTasks, useTasksDispatch } from '../contexts/TasksProvider.js';
import { useMediaQuery } from '../contexts/MediaQueryProvider.js';
import { useState } from 'react';

export default function AddTasks() {
    const tasks = useTasks();
    const tasksDispatch = useTasksDispatch();
    const [selectedList, setSelectedList] = useState("all");
    const [status, setStatus] = useState({});
    const [sidebarState, setSidebarState] = useState("collapsed");
    const mediaQuery = useMediaQuery();

    let mainClasses = "main-page tasks-wrapper";
    if (mediaQuery === "mobile") {
        mainClasses += " tasks-wrapper-mobile";
    }
    
    let selectedTasks = selectedList === "important" ? tasks.filter(task => task.important) : tasks;

    function toggleSidebar(newState) {
        setSidebarState(newState);
    }

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

    function onPageClick() {
        if (mediaQuery === "mobile" && sidebarState === "expanded") {
            toggleSidebar("collapsed");
        }
    }

    return (
    <main className={mainClasses} onClick={onPageClick}>
        <TasksSidebar onListChange={(newList) => {
            if (newList === selectedList) return;
            changeList(newList);
            collapseTask();
        }} selectedList={selectedList}
        sidebarState={sidebarState}
        onSidebarToggle={toggleSidebar} />
        <TasksView tasks={selectedTasks} onTaskToggle={toggleTask} onTaskChange={editTask} onTaskDelete={removeTask} onTaskAdd={addTask}
        onTaskImportanceToggle={toggleTaskImportance} onTaskAddBegin={startCreatingTask} onTaskAddEnd={finishCreatingTask}
        onTaskExpand={expandTask} onTaskCollapse={collapseTask} status={status} selectedList={selectedList} sidebarState={sidebarState}
        onSidebarToggle={toggleSidebar}/>
    </main>
    );
}


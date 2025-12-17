import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useTasks, useTasksDispatch } from './contexts/TasksProvider.js';
import { useState } from 'react';

export default function Tasks() {
    const tasks = useTasks();
    const tasksDispatch = useTasksDispatch();
    const [selectedList, setSelectedList] = useState("all");

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

    return (
    <main className="main-page tasks-wrapper">
        <TasksSidebar onListChange={changeList} selectedList={selectedList}/>
        <TasksView tasks={selectedTasks} onTaskToggle={toggleTask} onTaskChange={editTask} onTaskDelete={removeTask} onTaskAdd={addTask}
        onTaskImportanceToggle={toggleTaskImportance}/>
    </main>
    );
}


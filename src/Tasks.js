import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useTasks, useTasksDispatch } from './contexts/TasksProvider.js';

export default function Tasks() {
   const tasks = useTasks();
   const tasksDispatch = useTasksDispatch();

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
        <TasksSidebar/>
        <TasksView tasks={tasks} onTaskToggle={toggleTask} onTaskChange={editTask} onTaskDelete={removeTask} onTaskAdd={addTask}
        onTaskImportanceToggle={toggleTaskImportance}/>
    </main>
    );
}


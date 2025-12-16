import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useState } from 'react';
import { useTasks, useTasksDispatch } from './contexts/TasksProvider.js';
/*
const initialTasks = [
    {id: 1, title: 'Buy milk', done: false, important: false},
    {id: 2, title: 'Clean the fridge', done: false, important: false},
    {id: 3, title: 'Fix sleeping schedule', done: true, important: false},
    {id: 4, title: 'Take out the trash', done: false, important: false},
    {id: 5, title: 'Call mom', done: false, important: false},
    {id: 6, title: 'Set up appointment', done: false, important: false},
    {id: 7, title: 'Buy new books', done: true, important: false}
]

let nextTaskId = 8;
*/
export default function Tasks() {

    /*

    const [tasks, setTasks] = useState(initialTasks);

    function toggleTask(id) {
        setTasks(tasks.map(task => {
            if (task.id !== id) {
                return task;
            }

            return {
                ...task,
                done: !task.done
            };
        }));
    }

    function toggleTaskImportance(id) {
            setTasks(tasks.map(task => {
            if (task.id !== id) {
                return task;
            }

            return {
                ...task,
                important: !task.important
            };
        }));
    }

    function editTask(newTask) {
        setTasks(tasks.map(task => {
            if (newTask.id !== task.id) {
                return task;
            }

            return newTask;
        }));
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => {
            if (task.id === id) {
                return false;
            }

            return true;
        }))
    }

    function addTask(newTask) {
        setTasks([...tasks, {...newTask, id: nextTaskId++}]);
    }
    */
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


import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useState } from 'react';

const initialTasks = [
    {id: 1, description: 'Buy milk', done: false},
    {id: 2, description: 'Clean the fridge', done: false},
    {id: 3, description: 'Fix sleeping schedule', done: true},
    {id: 4, description: 'Take out the trash', done: false},
    {id: 5, description: 'Call mom', done: false},
    {id: 6, description: 'Set up appointment', done: false},
    {id: 7, description: 'Buy new books', done: true}
]

let nextTaskId = 8;

export default function Tasks() {
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

    return (
    <main className="main-page tasks-wrapper">
        <TasksSidebar/>
        <TasksView tasks={tasks} onTaskToggle={toggleTask} onTaskChange={editTask} onTaskDelete={removeTask} onTaskAdd={addTask}/>
    </main>
    );
}


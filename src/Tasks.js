import TasksSidebar from './components/TasksSidebar';
import TasksView from './components/TasksView'; 
import './Tasks.css';
import { useState } from 'react';

const initialTasks = [
    {id: 1, description: 'Buy milk', done: false},
    {id: 2, description: 'Clean the fridge', done: false},
    {id: 3, description: 'Fix sleeping schedule', done: true}
]

export default function Tasks() {
    const [tasks, setTasks] = useState(initialTasks);

    return (
    <main className="main-page tasks-wrapper">
        <TasksSidebar/>
        <TasksView tasks={tasks}/>
    </main>
    );
}


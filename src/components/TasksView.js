import './TasksView.css';
import Task from './Task.js';

export default function TasksView({tasks, onTaskToggle}) {

    return (
      <section className="tasks-view">
        <ul className="tasks-list">
            {tasks.map(task => {
                return <Task key={task.id} task={task} onTaskToggle={onTaskToggle}/>;
            })}
        </ul>
      </section>
    );
}
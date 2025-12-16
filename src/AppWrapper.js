import { TasksProvider } from './contexts/TasksProvider.js'

export default function AppWrapper({children}) {

    return (
        <TasksProvider>
            {children}
        </TasksProvider>
    );
}
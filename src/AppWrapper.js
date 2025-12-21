import { TasksProvider } from './contexts/TasksProvider.js'
import { MediaQueryProvider } from './contexts/MediaQueryProvider.js';

export default function AppWrapper({children}) {

    return (
        <TasksProvider>
            <MediaQueryProvider>
                {children}
            </MediaQueryProvider>
        </TasksProvider>
    );
}
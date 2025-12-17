import { useReducer, createContext, useContext, useEffect, useRef } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({children}) {
    const nextIdRef = useRef(null);

    const [tasks, dispatch] = useReducer((currentState, action) => tasksReducer(currentState, action, nextIdRef), [], (initialArgs) => {
        const state = window.localStorage.getItem("state");

        let stateParsed;
        try {
            stateParsed = JSON.parse(state);
        } catch (e) {
            console.error(e);
        }

        nextIdRef.current = stateParsed?.nextId || 0;
        return stateParsed?.tasks || initialArgs;       
    });

    return (
        <TasksContext value={tasks}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}

const initialTasks = [
    {id: 1, title: 'Buy milk', done: false, important: false},
    {id: 2, title: 'Clean the fridge', done: false, important: false},
    {id: 3, title: 'Fix sleeping schedule', done: true, important: false},
    {id: 4, title: 'Take out the trash', done: false, important: false},
    {id: 5, title: 'Call mom', done: false, important: false},
    {id: 6, title: 'Set up appointment', done: false, important: false},
    {id: 7, title: 'Buy new books', done: true, important: false}
]

//let nextId = 8;

function tasksReducer(currentState, action, nextIdRef) {
    console.log("tasksReducer call with action: ", action);
    switch(action.type) {
        case "toggle_done": {
            let newTasks = currentState.map(task => {
                if (task.id !== action.id) {
                    return task;
                }

                return {...task, done: !task.done};
            });

            saveToLocalStorage(nextIdRef.current, newTasks);
            return newTasks;
        };
        case "toggle_importance": {
            let newTasks = currentState.map(task => {
                if (task.id !== action.id) {
                    return task;
                }

                return {...task, important: !task.important};
            });

            saveToLocalStorage(nextIdRef.current, newTasks);
            return newTasks;
        };
        case "edit_task": {
            let newTasks = currentState.map(task => {
                if (task.id === action.task.id) {
                    return action.task;
                }

                return task;
            });

            saveToLocalStorage(nextIdRef.current, newTasks);
            return newTasks;
        };
        case "remove_task": {
            let newTasks = currentState.filter(task => {
                if (task.id === action.id) {
                    return false;
                }

                return true;
            });

            saveToLocalStorage(nextIdRef.current, newTasks);
            return newTasks;
        };
        case "add_task": {
            let newTasks = [{...action.task, id: nextIdRef.current++}, ...currentState];

            saveToLocalStorage(nextIdRef.current, newTasks);
            return newTasks;
        };
        default: {
            throw new Error("Error in TaskProvider.js: action not recognized");
        }
    }
}

function saveToLocalStorage(nextId, tasks) {
    const toStore = {
        nextId: nextId,
        tasks: tasks
    };

    /*console.log(toStore);*/
    window.localStorage.setItem("state", JSON.stringify(toStore));
}
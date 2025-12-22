import './TasksSidebar.css';
import TasksIcon from './icons/TasksIcon.js';
import StarIcon from './icons/StarIcon.js';
import HamburgerButton from './controls/HamburgerButton.js';
import { useMediaQuery } from '../contexts/MediaQueryProvider.js';
import { useTasks } from '../contexts/TasksProvider.js';
import { useState } from 'react';

export default function TasksSidebar({onListChange, selectedList, sidebarState, onSidebarToggle}) {
    const tasks = useTasks();
    const mediaQuery = useMediaQuery();

    const defaultClasses="sidebar-list-item";
    const selectedClasses="sidebar-list-item selected-item";

    let sidebarClasses = "tasks-sidebar";
    if (sidebarState === "collapsed") {
        sidebarClasses += " sidebar-collapsed";
    }
    if (mediaQuery === "mobile") {
        sidebarClasses += " sidebar-mobile";
/*
        if (sidebarState !== "expanded") {
            toggleSidebar("expanded");
        }*/
    }

    const importantTasks = tasks.filter(task => task.important);

    return (
        <section className={sidebarClasses}>
            <HamburgerButton className="sidebar-expand-btn" toggled={sidebarState === "expanded"} onClick={() => {
                if (sidebarState === "expanded") {
                    onSidebarToggle("collapsed");
                } else {
                    onSidebarToggle("expanded");
                }
            }}/>
            <hr className="sidebar-separator .sidebar-separator-controls"/>
            <nav className="tasks-sidebar-nav">
                <ul className="sidebar-list">
                    <li className={selectedList === "all" ? selectedClasses : defaultClasses}>
                        <button className="btn sidebar-item-btn"
                        onClick={() => onListChange("all")}>
                            <div className="sidebar-item-icon center">
                                <TasksIcon />
                            </div>
                            {sidebarState === "expanded" && <><span className="sidebar-item-text">
                                All tasks
                            </span>
                            <span className="sidebar-item-number">
                                {tasks.length}
                            </span></>}
                        </button>
                    </li>
                    <li className={selectedList === "important" ? selectedClasses : defaultClasses}>
                        <button className="btn sidebar-item-btn" 
                        onClick={() => onListChange("important")}>
                            <div className="sidebar-item-icon center">
                                <StarIcon />
                            </div>
                            { sidebarState === "expanded" && <>
                            <span className="sidebar-item-text">
                                Important Tasks
                            </span>
                            <span className="sidebar-item-number">
                                {importantTasks.length}
                            </span></>}
                        </button>
                    </li>
                </ul>
                <hr className="sidebar-separator"/>
            </nav>
        </section>
    );
}   
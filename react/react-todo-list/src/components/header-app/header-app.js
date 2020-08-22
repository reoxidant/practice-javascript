import React from "react";
import './header-app.css';

const HeaderApp = ({countNeedToDoTasks, countDoneTasks}) => {

    const nameTask = (countDoneTasks == 0 || countDoneTasks > 1) ? "tasks" : "task";

    const subHeader = (countNeedToDoTasks > 0)
        ?
        <h2>{countDoneTasks} {nameTask} done do out of {countNeedToDoTasks}</h2>
        :
        <h2>You don't have any tasks</h2>;

    return (
        <div className="header-app d-flex">
            <h1>Todo list</h1>
            {subHeader}
        </div>
    )
};

export default HeaderApp;
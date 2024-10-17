import React from 'react'

function Tasks() {
    const Task_list = [
        {
            id: 1,
            task_name: "Go Shopping",
            completed: true
        },
        {
            id: 2,
            task_name: 'Read a book',
            completed: false
        },
        {
            id: 3,
            task_name: 'Work on a project',
            completed: true
        }
    ];
    return (
        <div>
            <h2>Tasks To Do</h2>
            <ul>
                {Task_list.filter((task)=>task.completed === false)
                .map((task) => (
                    <li key={task.id}>{task.task_name}</li>
                ))}
            </ul>

        </div>
    )
}

export default Tasks
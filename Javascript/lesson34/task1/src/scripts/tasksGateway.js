const baseUrl = 'https://5ecd23db7c528e00167cd104.mockapi.io/tasks';

const mapTasks = tasks =>
    tasks.map(({
        _id,
        ...rest
    }) => ({
        ...rest,
        id: _id
    }))


export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const createTask = taskData => {
    returnfetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
    setItem
};
export const updateTask = (taskId, updatedtaskData) => {
    returnfetch(`${baseUrl},/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(updatedtaskData)
    })
    setItem
};
export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })
}
const baseUrl = 'https://crudcrud.com/api/04a3ae00841d4b15abbef2e19432f814/tasks';

export const getTasksList = () => {
    return fetch('https://crudcrud.com/api/04a3ae00841d4b15abbef2e19432f814/tasks')
        .then(response => response.json())
}
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
    returnfetch(`baseUrl,/${taskId}`, {
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
import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway';

export const onCreateTask = () => {
        const taskTitleInputElem = document.querySelector('.task-input'); // c

        const text = taskTitleInputElem.value;

        if (!text) {
            return;
        }
        taskTitleInputElem.value = '';
        const newTask = {
            text,
            done: false,
            createDate: new Date().toISOString(),
            id: Math.random().toString()
        };
        createTask(newTask)
            .then(() => getTasksList())
            .then(newTasksList => {
                setItem('tasksList', newTasksList); // save in local storage 
                renderTasks();
            })
            // const newTasksList = tasksList.concat();
            // setItem('tasksList', newTasksList);

        // renderTasks(); // renew list
    }
    // 1.Prepare data
    //2.Write data to database
    //3.Read new data from server
    //4.Save new Data to front-end storage
    //5.Update UI based on new data
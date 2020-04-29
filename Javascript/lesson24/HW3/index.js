const tasks = [{
        text: 'Buy milk',
        done: false
    },
    {
        text: 'Pick up Tom from airport',
        done: false
    },
    {
        text: 'Visit party',
        done: false
    },
    {
        text: 'Visit doctor',
        done: true
    },
    {
        text: 'Buy meat',
        done: true
    },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = "";

    const listItemsElems = listItems
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            };
            if (a.done) {
                return new Date(b.dateEnd) - new Date(a.dateEnd);
            }
            return new Date(b.dateStart) - new Date(a.dateStart);
        })
        .map(({
            text,
            done
        }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });
    listElem.append(...listItemsElems);
};
renderListItems(tasks);

const btn = document.querySelector('.create-task-btn');
const addNewTask = () => {
    const createTaskInput = document.querySelector('.task-input');
    if (!createTaskInput.value) return false;
    tasks.unshift({
        text: createTaskInput.value,
        done: false,
        dateStart: new Date(),
        dateEnd: new Date(),
    });
    createTaskInput.value = '';

    renderListItems(tasks);
}
btn.addEventListener('click', addNewTask);

const taskConfirm = document.querySelector('.list');

function checkTask(e) {
    const checkTask = tasks.find(item =>
        item.text === e.target.parentNode.textContent);
    checkTask.done = e.target.checked;
    checkTask.dateEnd = checkTask.done ? new Date() : undefined;
    renderListItems(tasks);
};
taskConfirm.addEventListener('click', checkTask);
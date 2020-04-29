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
                return a.done - b.done
            };
            if (a.done) {
                return new Date(b.DateEnd) - new Date(a.dateEnd);
            }
            return new Date(b.dateStart) - new Date(a.dateStart)
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


btn.addEventListener('click', addNewTask);

const taskConfirm = document.querySelector('.list');

function confirmTask(elem) {
    const confirmTask = tasks.find(item =>
        item.text === elem.target.parentNode.textContent);
    confirmTask.done = elem.target.checked;
    confirmTask.dateEnd = confirmTask.done ? new Date() : undefined

    console.log(confirmTask.checked);
    console.log(confirmTask.done);

    renderListItems(tasks);
};

function addNewTask() {
    const addTaskInput = document.querySelector('.task-input');

    if (!addTaskInput.value) return false;
    tasks.unshift({
        text: addTaskInput.value,
        done: false,
        dateStart: new Data(),
        dateEnd: undefined

    });
    addTaskInput.value = "";

    renderListItems(tasks)

}
taskConfirm.addEventListener('click', confirmTask);
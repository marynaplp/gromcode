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
        .sort((a, b) => a.done - b.done)
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

function addNewTask() {
    const addTaskInput = document.querySelector('.task-input');

    if (!addTaskInput.value) return false;
    tasks.push({
        text: addTaskInput.value,
        done: false
    });
    addTaskInput.value = "";

    renderListItems(tasks)

}
btn.addEventListener('click', addNewTask);

const taskConfirm = document.querySelector('.list');

function confirmItem(e) {
    const confirmItem = tasks.find(item =>
        item.text === e.target.parentNode.textContent);
    confirmItem.done = e.target.checked;
    console.log(confirmItem.checked);
    console.log(confirmItem.done);

    renderListItems(tasks);
};
taskConfirm.addEventListener('click', confirmItem);
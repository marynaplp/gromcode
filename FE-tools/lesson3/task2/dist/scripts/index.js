import {
    initTodoListHandlers
} from './todoList.js';
import {
    renderTasks
} from './renderer.js';
import {
    getTasksList
} from './tasksGateway.js';
import {
    setItem
} from './storage.js';
document.addEventListener('DOMContentLoaded', function() {
    getTasksList().then(function(tasksList) {
        setItem('tasksList', tasksList);
        renderTasks();
    });
    initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
    if (e.key === 'tasksList') {
        renderTasks();
    }
};

window.addEventListener('storage', onStorageChange);

//const tasks = [{
// text: 'Buy milk',
//done: false,
//dateStart: new Date(),
//dateEnd: new Date()
//}, {
//text: 'Pick up Tom from airport',
//done: false,
// dateStart: new Date(),
//  dateEnd: new Date()
//}, {
//text: 'Visit party',
//done: false,
//dateStart: new Date(),
// dateEnd: undefined
//}, {
//text: 'Visit doctor',
//done: true,
//dateStart: new Date(),
//// dateEnd: new Date()
//}, {
//text: 'Buy meat',
//done: true,
//dateStart: new Date(),
//dateEnd: new Date()
//},
//];


//const renderListItems = listItems => {
// const listElem = document.querySelector('.list');
// listElem.innerHTML = '';


//  const listItemsElems = listItems
// .sort((a, b) => {
// if (a.done - b.done !== 0) {
//    return a.done - b.done;
//};
// if (a.done) {
//     return new Date(b.dateEnd) - new Date(a.dateEnd);
//  }
//   return new Date(b.dateStart) - new Date(a.dateStart);
//})
// .map(({
//    text,
//     done
//  }) => {
// console.log(text, done);
//  const listItemElem = document.createElement('li');
//  listItemElem.classList.add('list__item');
//   if (done) {
//      listItemElem.classList.add('list__item_done');
//   }
// const checkboxElem = document.createElement('input');
//checkboxElem.setAttribute('type', 'checkbox');
//   checkboxElem.checked = done;
//   checkboxElem.classList.add('list__item-checkbox');
//  listItemElem.append(checkboxElem, text);


//return listItemElem;
//});
//listElem.append(...listItemsElems);
//};
//renderListItems(tasks);


//const btn = document.querySelector('.create-task-btn');
//const addToList = () => {
//const createTaskInput = document.querySelector('.task-input');
//  if (!createTaskInput.value) return false;
//  tasks.unshift({
//      text: createTaskInput.value,
//      done: false,
//      dateStart: new Date(),
//      dateEnd: undefined
//});
//  createTaskInput.value = "";


//  renderListItems(tasks);
//}
//btn.addEventListener('click', addToList);


//const taskConfirm = document.querySelector('.list');
//const confirmItem = e => {
//const confirmItem = tasks.find(item =>
// item.text === e.target.parentNode.textContent);
//confirmItem.done = e.target.checked
//confirmItem.dateEnd = confirmItem.done ? new Date() : undefined;
//renderListItems(tasks);
//};
//taskConfirm.addEventListener('click', confirmItem);
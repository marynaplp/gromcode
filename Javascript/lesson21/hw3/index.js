function getTitle() {
    const elementTitle = document.querySelector('.title')
    return elementTitle.textContent;

}

function getDescription() {
    const elementAbout = document.querySelector('.about')
    return elementAbout.innerText;

}

function getPlans() {
    const elementPlans = document.querySelector('.plans')
    return elementPlans.innerHTML;
}

function getGoal() {
    const elementGoal = document.querySelector('.goal')
    return elementGoal.outerHTML
}
export { getTitle, getDescription, getPlans, getGoal }
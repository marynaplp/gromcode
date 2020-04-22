function clearList() {
    const emptyList = document.querySelector('.categories')
    return emptyList.innnerHTML = '';

}
export { clearList };
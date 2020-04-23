function getSection(num) {
    const findNumberSec = document.querySelector(`span[data-number="${num}"]`);
    const getTag = findNumberSec.closest('div');
    const getData = getTag.getAttribute('data-section')

    return getData;
}
export { getSection }
const getOwnProps = obj => {
    const Array = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
            Array.push(prop);
        }

    }

    return Array
}
export { getOwnProps }
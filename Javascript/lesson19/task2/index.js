const getOwnProps = obj => {
    const Array = [];
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            Array.push(prop);
        }

    }

    return Array
}
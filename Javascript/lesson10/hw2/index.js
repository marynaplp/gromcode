const getRandomNumbers = (length, start, end) => {
    if (Math.floor(start) >= Math.floor(end)) {
        return null;
    }
    return Array(length).fill().map(el => Math.floor(Math.random() * start + end))

}
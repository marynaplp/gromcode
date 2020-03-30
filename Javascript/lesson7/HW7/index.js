function filterNames(arr, text) {
    const specialStudents = allNames
    return arr.filter(name => name(text).length > 5);

};
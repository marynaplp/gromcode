const getMessagessForBestStudents = (allSudents, failedStudents) => {
    const bestStudents = allStudents
        .filter(name => !(failedStudents.IndexOf(name) !== -1))
        .map(name => 'Good job, ' + name);
    return bestStudents;


}
const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
// Find passed students
//add message Good job
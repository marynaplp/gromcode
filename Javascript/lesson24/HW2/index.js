const students = [
    { name: 'Tom', birthday: '01/15/2010' },
    { name: 'Ben', birthday: '01/17/2008' },
    { name: 'Sam', birthday: '03/15/2010' },
]

const studentsBirthDays = students => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortedStudents = students.sort((a, b) => new Date(a.birthday).getDate() - new Date(b.birthday).getDate())
    const newArray = sortedStudents.reduce((acc, {
        name,
        birthday
    }) => {
        const nameMonth = months[new Date(birthday).getMonth()];
        return { acc, [nameMonth]: acc[nameMonth] ? acc[nameMonth].concat(name) : [name] }

    }, {});


    return newArray
}
console.log(studentsBirthDays(students))
    //export {
    //  studentsBirthDays
    //}
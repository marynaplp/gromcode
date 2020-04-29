const students = [
    { name: 'Tom', birthDay: '01/15/2010' },
    { name: 'Ben', birthDay: '01/17/2008' },
    { name: 'Sam', birthDay: '03/15/2010' },
]

const studentsBirthDays = students => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortedStudents = students.sort((a, b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
    const newArray = sortedStudents.reduce((acc, {
        name,
        birthDay
    }) => {
        const nameMonth = months[new Date(birthDay).getMonth()];
        return {...acc, [nameMonth]: acc[nameMonth] ? acc[nameMonth].concat(name) : [name] }

    }, {});


    return newArray
}
console.log(studentsBirthDays(students))
export {
    studentsBirthDays
}
const students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Ben', birthDate: '01/17/2008' },
    { name: 'Sam', birthDate: '03/15/2010' },
]

const studentsBirthDays = students => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortedStudents = students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    const newArray = sortedStudents.reduce((acc, {
        name,
        birthDate
    }) => {
        const nameMonth = months[new Date(birthDate).getMonth()];
        return {...acc, [nameMonth]: acc[nameMonth] ? acc[nameMonth].concat(name) : [name] }

    }, {});


    return newArray
}
console.log(studentsBirthDays(students))
export {
    studentsBirthDays
}
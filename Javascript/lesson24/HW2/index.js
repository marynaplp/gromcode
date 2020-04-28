const students = [
    { name: 'Tom', birthday: '01/15/2010' },
    { name: 'Ben', birthday: '01/17/2008' },
    { name: 'Sam', birthday: '03/15/2010' },

]

const studentsBirthDays = students => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortedStudents = students.sort((a, b) => new Date(a).getDate() - new Date(b).getDate())
    const newArray = sortedStudents.reduce
    return newArray
}
console.log(studentsBirthDays(students));
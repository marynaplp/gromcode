const getMessagesForBestStudents = (allSudents, failedStudents) =>
    allStudents
    .filter(name => !(failedStudents.includes(name))
        .map(name => 'Good job, ' + name);

        const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
        const failedStudents = ['Tom', 'Bob'];
        // Find passed students
        //add message Good job
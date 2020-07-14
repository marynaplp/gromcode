export const getUsersBlogs = async usersData => {
    try {
        const getUsersData = await usersData.forEach(usersData => {
                fetch(`https://api.github.com/users/${userId}`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                throw new Error('Failed to fetch user')
            })
            .then(users => users.blog)
        const userData = Promise.all(getUsersData);
        return userData;
    } catch (error) {
        throw new Error('Failed to fetch user')

    }
}
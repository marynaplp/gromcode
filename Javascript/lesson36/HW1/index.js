export const getUsersBlogs = async users => {
    try {
        const getUsersData = await users.forEach(users => {
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
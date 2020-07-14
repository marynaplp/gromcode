// запрашиваем пользователя
export const fetchUserData = userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
        //.then(response => {
    if (response.ok) {
        return await response.json()
    }
    throw new Error('Failed to load data');

};

export const fetchRepositories = async url => {
    const response = await fetch(url)


    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
}
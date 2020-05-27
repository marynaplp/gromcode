const BaseUrL = "https://5ecd23db7c528e00167cd104.mockapi.io/api/v1/users"

export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};

export const getUsersById = (userId) => {
    return fetch(`${baseUrl}/${userId}`)
        .then(response => response.json());
};

export const createUser = (user) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content -Type': 'application/json;charser= utf-8'
        },
        body: JSON.stringify(user)

    });
}

export const updateUser = (id, updatedUserData) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content -Type': 'application/json;charser= utf-8'
        },
        body: JSON.stringify(updatedUserData)

    });

}

export const deleteUser = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });
}
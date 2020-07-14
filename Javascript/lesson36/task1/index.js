const fetchUser = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    console.log(response);
};
fetchUser('facebook');
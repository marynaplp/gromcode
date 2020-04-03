const sortContacts = contacts => {
    const result = contacts
        .sort((a, b) => {
            return a.localeCompare(b);
        });
    return result;

}
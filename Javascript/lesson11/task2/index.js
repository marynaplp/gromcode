const sortContacts = (contacts, boolean) => {
    if (!Array.isArray(contacts)) {
        return null;
    }

    const result = contacts
        .sort((a, b) => {
            return a.localeCompare(b);
        });
    if (boolean === false) {
        contacts.sort((a, b) => {
            return b.localeCompare(a);
        })
    }

    return result;

}
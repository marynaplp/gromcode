let contacts = [{
        name: 'Tom',
        phoneNumber: '777-12-99',
    },
    {
        name: 'Maryna',
        phoneNumber: '799-02-99',
    },
]
let boolean = true;

const sortContacts = (contacts, boolean) => {
    if (!Array.isArray(contacts)) {
        return null;
    }

    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    if (boolean == false) {
        contacts.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })
    }

    return result;

}
const fs = require('fs/promises');
const contactsPath = require('./db');
const { nanoid } = require('nanoid');

const updateContactList = async (contactList) => {
    await fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
}

async function listContacts() {

    const data = await fs.readFile(contactsPath);
    if (data.length === 0) {
        return [];
    }

    const result = JSON.parse(data);

    return result;
}

async function getContactById(contactId) {
    const list = await listContacts();
    const idx = list.findIndex(item => item.id === contactId.toString());

    if (idx === -1) {
        return null;
    }

    const contact = list[idx];

    return contact;
}

async function removeContact(contactId) {
    const list = await listContacts();
    const idx = list.findIndex(item => item.id === contactId.toString());

    if (idx === -1) {
        return null;
    }

    const [contactRemoved] = list.splice(idx, 1);
    await updateContactList(list);

    return contactRemoved;
}

async function addContact(name, email, phone) {
    const list = await listContacts();

    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };

    list.push(newContact);

    await updateContactList(list);

    return newContact;
}

const contacts = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}

module.exports = contacts;
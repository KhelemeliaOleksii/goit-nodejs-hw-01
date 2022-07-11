const { Command } = require('commander');
const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "add":
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;
        case "get":
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;
        case "list":
            const contactList = await contacts.listContacts();
            console.log(contactList);
            break;
        case "remove":
            const contactRemoved = await contacts.removeContact(id);
            console.log(contactRemoved);
            break;
        default:
            console.error(`Error. Invalid type of action "${action}"`);
            console.log("Performed action:\n \
            add,\n \
            get,\n \
            list,\n \
            remove\n ");
    }
}

const program = new Command();

program
    .option('-act, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

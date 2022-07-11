# Contacts. BackEnd  

## Lesson 1.

### What we get: 

1. Command:  
    node --act list
![link](https://monosnap.com/image/7MiJEZqB89V2hxl25fZj2tvx5CrDcV) 

### What we do: Work with json files

1. Database file contacts.json is placed to folder db ("database"). 
Add index.js with path to db.

2. Perform next actions:

 - `--action list` (short: `-act list` ) - return an array of the contact from the db. Empty array if contacts don't exist.
 
 - `--action get --id <id>` (short: `-act get -i <id>`) - return a contact by id from the db. 'Null' if a contact doesn't exist;
 
 - `--action add --name <name> --email <emai> --phone <phone>`   (short: `-act add -n <name> -e <emai> -p <phone>`) - Create a new contact object  with properties: name, email, phone. Add the contact to the db. Return the contact.   
 
 - `--action remove --id <id>` (short: `-act remove -i <id>` )- Remove a contact with 'id' from the db. Return the removed contact. 'Null' if a contact doesn't exist;










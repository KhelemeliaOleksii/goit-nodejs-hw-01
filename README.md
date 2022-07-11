# Contacts. BackEnd  

## Lesson 1.

### What we get: 

1. `node index -act list`  

![link](https://monosnap.com/image/7MiJEZqB89V2hxl25fZj2tvx5CrDcV) 

2. `node index -act get -i 10`

![link](https://monosnap.com/image/BIGoztmrwEBIRhogOqe68KgE23tZTt)

3. `node index -act add -n developer -e dev@mail.com -p \(012\)345-6789 `

![link](https://monosnap.com/image/Abv51lsmcUdx1uqBK112ciCt7xUyCn)

4. `node index -act remove -i 3`

![link](https://monosnap.com/image/AzqlccCDcWE5wLHegPTmACsM9isAg0)


### What we do: Work with json files

1. Database file contacts.json is placed to folder db ("database"). 
Add index.js with path to db.

2. Perform next actions:

 - `--action list` (short: `-act list` ) - return an array of the contact from the db. Empty array if contacts don't exist.
 
 - `--action get --id <id>` (short: `-act get -i <id>`) - return a contact by id from the db. 'Null' if a contact doesn't exist;
 
 - `--action add --name <name> --email <emai> --phone <phone>`   (short: `-act add -n <name> -e <emai> -p <phone>`) - Create a new contact object  with properties: name, email, phone. Add the contact to the db. Return the contact.   
 
 - `--action remove --id <id>` (short: `-act remove -i <id>` )- Remove a contact with 'id' from the db. Return the removed contact. 'Null' if a contact doesn't exist;










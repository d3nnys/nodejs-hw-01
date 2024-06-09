import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';
// import path from 'node:path';

const generateContacts = async (number) => {
  try {
    const data = fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i + 1) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

await generateContacts(5);

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs';

const generateContacts = async (number) => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error(error.message);
  }
};

await generateContacts(5);

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs';

export const addOneContact = async () => {
  try {
    const data = fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    contacts.push(createFakeContact);

    fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

await addOneContact();

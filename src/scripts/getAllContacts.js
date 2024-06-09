import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const getAllContacts = async () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
};

console.log(await getAllContacts());

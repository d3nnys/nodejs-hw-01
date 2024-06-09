import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const removeAllContacts = async () => {
  try {
    fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
  } catch (error) {
    console.log(error.message);
  }
};

await removeAllContacts();

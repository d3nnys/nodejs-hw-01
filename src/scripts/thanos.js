import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs';

export const thanos = async () => {
  try {
    const data = fs.readFileSync(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const thanosTouch = contacts.filter(() => Math.random() >= 0.5);

    fs.writeFileSync(PATH_DB, JSON.stringify(thanosTouch, null, 2), 'utf-8');
  } catch (error) {
    console.log(error.message);
    fs.writeFileSync(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
  }
};

await thanos();

//Math.random() >= 0.5

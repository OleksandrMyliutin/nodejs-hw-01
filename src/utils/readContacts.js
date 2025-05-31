import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf-8');
    return JSON.parse(data);
};

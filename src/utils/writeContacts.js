import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    await fs.writeFile(path.resolve(PATH_DB), JSON.stringify(updatedContacts, null, 2));
    return writeContacts;
};

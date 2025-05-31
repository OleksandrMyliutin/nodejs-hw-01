import {createFakeContact} from '../utils/createFakeContact.js';
import {writeContacts} from '../utils/writeContacts.js';
import {readContacts} from '../utils/readContacts.js';


const generateContacts = async (number) => {
    try {
        const readContactsData = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const updateContacts = [...readContactsData, ...newContacts];
        await writeContacts(updateContacts);
        console.log(`Generated ${number} new contacts successfully.`);
    } catch (error) {
        console.error('Error generating contacts:', error.message);
    }
};

generateContacts(5);

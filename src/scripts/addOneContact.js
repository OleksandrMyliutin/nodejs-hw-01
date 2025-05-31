import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";

export const addOneContact = async () => {
    try{
        const readContactsData = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...readContactsData, newContact];
        await writeContacts(updatedContacts);
        console.log("New contact added successfully:", newContact);
    }
    catch (error) {
        console.error("Error adding new contact:", error.message);
    }
};

addOneContact();

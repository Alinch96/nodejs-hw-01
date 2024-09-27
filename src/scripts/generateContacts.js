import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

//Помилку прокидую тільки на останньому етапі у методі generate для того аби e випадку, якщо помилка виникла на
// попередніх етапах код зупинився і не продовжував своє виконання у випадку помилки на попередніх етапах (readContacts)

export const generateContacts = async (number) => {
  try {
    const contacts = JSON.parse(await readContacts());
    for (let index = 0; index < number; index++) {
      contacts.push(createFakeContact());
    }
    await writeContacts(JSON.stringify(contacts, undefined, number));
  } catch (e) {
    console.log('Print error', e);
  }
};

generateContacts(5);

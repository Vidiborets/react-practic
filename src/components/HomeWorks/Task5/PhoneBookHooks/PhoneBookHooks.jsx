import { useState } from 'react';
import { Contacts } from './Contacts/Contact';
import { Filter } from './Filter/Filter';
import { Phonebook } from './Phonebook/Phonebook';
export const PhoneBookHooks = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const handleSubmit = newContact => {
    console.log(newContact);
    const dublicateContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (dublicateContact) {
      return alert('Такой контакт уже есть');
    }
    setContacts(prevContact => [...prevContact, newContact]);
  };
  const onDeleteContact = contactId => {
    setContacts(prevContact =>
      prevContact.filter(({ id }) => id !== contactId),
    );
  };
  const getVisibleContact = () => {
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts),
    );
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const visibleContacts = getVisibleContact();

  return (
    <div>
      <>
        <h1>PhoneBookHooks</h1>
        <Phonebook onSubmit={handleSubmit} title="Phonebook" />
        <Filter value={filter} onChange={handleFilter} />
        <Contacts
          options={visibleContacts}
          title="Contacts"
          onClick={onDeleteContact}
        />
      </>
    </div>
  );
};
// import React from 'react';
// import { Phonebook } from './Phonebook/Phonebook';
// import { Contacts } from './Constacts/Contacts';
// import { Filter } from './Filter/Filter';
// export class Task3 extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//   };
//   handleSubmit = newContact => {
//     const dublicateContact = this.state.contacts.find(
//       contact => contact.name === newContact.name,
//     );
//     if (dublicateContact) {
//       return alert('Такой контакт уже есть');
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [...contacts, newContact],
//     }));
//   };
//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };
//   getVisibleContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizeContacts = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeContacts),
//     );
//   };

//   render() {
//     const visibleContacts = this.getVisibleContact();
//     const { filter } = this.state;

//     return (
//       <>
//         <Phonebook onSubmit={this.handleSubmit} title="Phonebook" />
//         <Filter value={filter} onChange={this.handleFilter} />
//         <Contacts
//           options={visibleContacts}
//           title="Contacts"
//           onClick={this.onDeleteContact}
//         />
//       </>
//     );
//   }
// }

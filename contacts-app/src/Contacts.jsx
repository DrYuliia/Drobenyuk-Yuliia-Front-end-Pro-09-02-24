import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the contacts!", error);
      });
  }, []);

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
    setShowForm(false);
  };

  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name.split(' ')[0]}</td>
              <td>{contact.name.split(' ')[1]}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowForm(true)}>Додати контакт</button>
      {showForm && <ContactForm addContact={addContact} cancel={() => setShowForm(false)} />}
    </div>
  );
};

export default Contacts;

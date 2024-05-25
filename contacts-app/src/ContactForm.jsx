import React, { useState } from 'react';

const ContactForm = ({ addContact, cancel }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({ name: `${firstName} ${lastName}`, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Прізвище:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Телефон:</label>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Зберегти</button>
      <button type="button" onClick={cancel}>Скасувати</button>
    </form>
  );
};

export default ContactForm;

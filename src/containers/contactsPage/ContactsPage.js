import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addToContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);

  useEffect(() => {
    if (contacts.name === name) {
      return setDuplicateCheck(true);
    }
  }, [contacts.name, name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add contact info and clear data if the contact name is not a duplicate
    if (!duplicateCheck) {
      addToContact(name, phone, email);

      //resetting values
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arrObj={contacts} />
      </section>
    </div>
  );
};

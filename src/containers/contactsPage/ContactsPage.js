import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = () => {
  const contacts = props.contacts;
  const addToContact = props.addToContact;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateCheck, setDuplicateCheck] = useState(false);

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

  useEffect(() => {
    if (contacts.name === name) {
      return setDuplicateCheck(true);
    }
  });

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

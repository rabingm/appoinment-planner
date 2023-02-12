import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleOnNameChange = ({ target }) => {
    setName(target.value);
  };
  const handleOnPhoneChange = ({ target }) => {
    setPhone(target.value);
  };
  const handleOnEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleOnNameChange}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        value={phone}
        onChange={handleOnPhoneChange}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        value={email}
        onChange={handleOnEmailChange}
        placeholder="Email"
        required
      />
      <input type="submit" />
    </form>
  );
};

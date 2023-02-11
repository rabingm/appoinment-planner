import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  let [contacts, setContacts] = useState([]);
  let [appoinments, setAppoinments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addToContact = (name, phone, email) => {
    setContacts((prev) => [
      ...prev,
      {
        name,
        phone,
        email,
      },
    ]);
  };

  const addToAppoinments = (title, contact, date, time) => {
    setAppoinments((prev) => [...prev, { title, contact, date, time }]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addToContact={addToContact} contacts={contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              addToAppoinments={addToAppoinments}
              contacts={contacts}
              appoinments={appoinments}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

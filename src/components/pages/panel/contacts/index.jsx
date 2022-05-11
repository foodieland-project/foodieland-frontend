import React, { useState, useEffect } from "react";
import PanelLayout from "../../../layout/panelLayout";
import ContactHeader from "./components/contactHeader";
import ContactTitle from "./components/contactTitle";
import ContactItem from "./components/contactItem";
import contacts from "./components/data";

const Contacts = () => {
  return (
    <PanelLayout>
      <ContactHeader />
      <section className="p-4 font-inter">
        <ContactTitle />
        {/* <ContactItem key="id" id="id" user="user" subject="subject" role="role" message="message"/> */}
        {contacts.map(({ id, email, subject, role, message }) => (
          <ContactItem key={id} email={email} role={role} message={message} subject={subject}/>
        ))}
      </section>
    </PanelLayout>
  );
};

export default Contacts;

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
        {contacts.map(({ id, user, subject, role, message, image }) => (
          <ContactItem key={id} user={user} role={role} message={message} subject={subject} image={image}/>
        ))}
      </section>
    </PanelLayout>
  );
};

export default Contacts;

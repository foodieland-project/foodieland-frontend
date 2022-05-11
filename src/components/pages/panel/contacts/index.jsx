import React, { useState,useEffect } from "react";
import PanelLayout from "../../../layout/panelLayout";
import ContactHeader from "./components/contactHeader";
import ContactTitle from "./components/contactTitle";
import ContactItem from "./components/contactItem";
import contacts from "./components/data";
import { icons } from "../../../../utils/icons";

const Contacts = () => {
  const [FormData, setFormData] = useState(contacts);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactPerPage] = useState(5);
  const indexOfLastContact = currentPage * contactPerPage;
  /* const indexOfFirstContact = indexOfLastContact - contactPerPage; */
  const paginationNumbers = Math.ceil(FormData.length / contactPerPage);

  

  function handlePrev(currentPage, setCurrentPage) {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext(currentPage, setCurrentPage,paginationNumbers) {
    if (currentPage < paginationNumbers) {
      setCurrentPage(currentPage + 1);
    }
  }
  return (
    <PanelLayout>
      {/* =============== Pagination ==============*/}
      <div className="">
        <div className="flex flex-row items-center m-[30px]">
          <span
            onClick={() => {
              handlePrev(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="bg-gray-300 cursor-pointer text-darkPurple rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowLeft()}
          </span>
          <div className="mx-[5px]">
            <span>page </span>
            <input
              className="w-[30px] h-[30px] rounded-md border-[1px] border-gray-400 text-center"
              type="text"
              value={currentPage}
              onChange={(e) => {
                setCurrentPage(e.target.value);
              }}
            ></input>
            <span>{` from ${paginationNumbers}`}</span>
          </div>
          <span
            onClick={() => {
              handleNext(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="bg-gray-300 text-darkPurple cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowRight()}
          </span>
        </div>
      </div>

      {/* =============== Pagination ==============*/}

      <ContactHeader />
      <section className="p-4 font-inter">
        <ContactTitle />
        {/* <ContactItem key="id" id="id" user="user" subject="subject" role="role" message="message"/> */}
        {contacts.map(({ id, email, subject, role, message }) => (
          <ContactItem
            key={id}
            email={email}
            role={role}
            message={message}
            subject={subject}
          />
        ))}
      </section>
    </PanelLayout>
  );
};

export default Contacts;

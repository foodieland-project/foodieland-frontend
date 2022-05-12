import React, {useState} from "react";


function ContactItem({ email, subject, message }) {
  

  return (
    <>
      <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] mx-h-[80px] h-[80px] p-6 rounded-md items-center my-1">
        <p className="w-[30%] sm:w-[100%] md:[50%] text-center">{email}</p>
        <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">
          {subject}
        </p>

        <p className="w-[80%] sm:w-[100%] text-center truncate pl-4">
          {message}
        </p>
      </div>
    </>
  );
}

export default ContactItem;

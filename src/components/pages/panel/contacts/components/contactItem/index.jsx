import React from "react";

function ContactItem({ user, subject, role, message }) {
  return (
    <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-[10%] mx-h-[50px] p-6 rounded-md items-center my-1">
      <p className="w-[30%] sm:w-[100%] md:[50%] text-center">{user}</p>
      <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">
        {subject}
      </p>
      <p className="md:w-[40%] text-center md:block hidden">{role}</p>
      <p className="w-[80%] sm:w-[100%] text-center">{message}</p>
    </div>
  );
}

export default ContactItem;

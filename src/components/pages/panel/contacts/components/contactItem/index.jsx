import React from "react";

function ContactItem({ title, subject, role, message }) {
  return (
    <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-[30px] p-[20px] rounded-md items-center my-1">
      <p className="w-[100%] sm:w-[80%] md:[50%] text-center ">{title}</p>
      <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">
        {subject}
      </p>
      <p className="md:w-[40%] text-center md:block hidden">{role}</p>
      <p className="w-[10%] text-center xl:block hidden">{message}</p>
    </div>
  );
}

export default ContactItem;

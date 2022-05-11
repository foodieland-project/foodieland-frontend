import React from "react";

function ContactItem({ user, subject, role, message,image }) {
  return (
    <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-5 p-6 rounded-md items-center my-1">
      <img src="/images/panel/Avatar.png" alt="avatar" className="" />
      <p className="w-[100%] sm:w-[80%] md:[50%] text-center ">{user}</p>
      <p className="sm:w-[20%] md:[10%] text-center sm:block hidden">
        {subject}
      </p>
      <p className="md:w-[40%] text-center md:block hidden">{role}</p>
      <p className="w-[10%] text-center xl:block hidden">{message}</p>
    </div>
  );
}

export default ContactItem;

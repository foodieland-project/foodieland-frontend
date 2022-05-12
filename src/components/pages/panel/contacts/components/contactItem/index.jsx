import React, { useState } from "react";

function ContactItem({ email, subject, message }) {
  return (
    <>
      <div className="flex flex-row justify-between gap-4 flex-1 border-darkPurple border-[1px] mx-h-[80px] h-[90px] rounded-md items-center my-1">
        <p className="w-[30%] sm:w-[100%] md:w-[50%]  break-all text-center text-sm">
          {email}
        </p>
        <p className="sm:w-[20%] md:w-[20%] text-center sm:block hidden font-semibold text-sm">
          {subject}
        </p>

        <p className="w-[80%] sm:w-[100%] text-center text-xs text-secondary  break-all h-full overflow-y-auto p-1">
          {message}
        </p>
      </div>
    </>
  );
}

export default ContactItem;

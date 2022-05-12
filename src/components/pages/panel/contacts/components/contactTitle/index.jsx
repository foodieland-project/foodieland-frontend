import React from "react";

function ContactTitle({ title, category, time, view, comments }) {
  return (
    <div className="flex flex-row items-center text-white bg-darkPurple h-8 py-7 rounded-md my-2">
      <p className="w-[80%] sm:w-[100%] md:w-[50%] text-center ">Email</p>
      <p className="sm:w-[20%] md:w-[20%] text-center sm:block hidden ">
        Subject
      </p>
      <p className="w-[100%] text-center">Message</p>
    </div>
  );
}

export default ContactTitle;

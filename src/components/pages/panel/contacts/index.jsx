import React from "react";
import PanelLayout from "../../../layout/panelLayout";
import Input from "./contactInput/Input";

const Contacts = () => {
  return (
    <PanelLayout>
      <form className="flex flex-col px-10 sm:px-32 lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-10 lg:col-span-2 lg:px-5 ">
        <div className="">
          <Input
            label="Name"
            placeholder="Enter your name"
            type="text"
            id="name"
          />

          <Input
            label="Email"
            placeholder="Enter your Email"
            type="email"
            id="email"
          />
        </div>
      </form>
    </PanelLayout>
  );
};

export default Contacts;

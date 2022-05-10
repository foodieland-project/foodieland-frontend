import React, { useState } from "react";
import PanelLayout from "../../../layout/panelLayout";
import Input from "./contactInput/Input";
import Select, { SelectList } from "./contactInput/Select";

const options = [
  { id: "Advertising", name: "Advertising" },
  { id: "Commercials", name: "Commercial" },
  { id: "Support", name: "Support" },
];

const Contacts = () => {
  const [selectValue, setSelectValue] = useState({});


  const selectChangeHandler = (data) => {
    setSelectValue((prevState) => {
      return {
        ...prevState,

        [data.id]: {
          value: data.value,
        },
      };
    });
  };

  return (
    <PanelLayout>
      <div className="text-center my-4">
        <h2 className="text-4xl font-semibold">
          Contact us
        </h2>
      </div>


      <form className="flex flex-col px-10 sm:px-32 lg:px-5 ">
        <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-10 lg:col-span-2">
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

          <Input
            label="Subject"
            placeholder="Enter Subject"
            type="text"
            id="subejct"
          />

          <Select
            onChange={selectChangeHandler}
            id="category"
            label="ENQUIRY TYPE"
            options={options}
          />
        </div>
      </form>
    </PanelLayout>
  );
};

export default Contacts;

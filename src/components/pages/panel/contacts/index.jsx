import React, { useState } from "react";
import PanelLayout from "../../../layout/panelLayout";
import Button from "./components/button";
import Input from "./components/Input";
import Select from "./components/Select";
import TextArea from "./components/TextArea";

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
        <h2 className="text-4xl font-semibold text-[#9155fd] font-inter">Contact us</h2>
      </div>

      <form className="flex flex-col px-10 sm:px-32 lg:px-5">
        <div className=" lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-8 lg:col-span-2">
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
            label="Enqyiry Type"
            options={options}
          />

          <TextArea
            /* onSubmit={submitError}
            onChange={inputChangeHandler} */
            label="Message"
            id="message"
            placeholder="Enter your Message..."
          />

          <Button type={"submit"}>submit</Button>
        </div>
      </form>
    </PanelLayout>
  );
};

export default Contacts;

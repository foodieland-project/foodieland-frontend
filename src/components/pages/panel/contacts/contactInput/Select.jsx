import { useState, useEffect } from "react";

const Select = (props) => {
  const [selectedValue, setSelectValue] = useState(props.options[0].id);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    props.onChange({
      id: props.id,
      value: selectedValue,
    });
  }, [selectedValue]);
  
  const options = props.options.map((option, index) => (
    <option className="text-black" key={index} value={option.id}>
      {option.name}
    </option>
  ));

  return (
    <>
      <div className="flex flex-col font-inter">
        <label
          className="text-md font-medium my-3 tracking-wide"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <select
          className="w-full border-2 rounded-md p-3 mb-4 outline-none"
          onChange={handleChange}
          id={props.id}
        >
          {options}
        </select>
      </div>
    </>
  );
};

export default Select;

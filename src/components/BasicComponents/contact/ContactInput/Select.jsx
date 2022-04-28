import { useState, useEffect } from "react";

const SelectList = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.options[0].id);

  const valueChangeHandler = (event) => {
    setSelectedValue(event.target.value);
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
    <div>
      <label
        className="inline-block text-xs font-medium tracking-wide opacity-80 mb-2"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <select
        onChange={valueChangeHandler}
        className="border border-gray-900/10 p-5 rounded-2xl text-sm  mb-6 w-full text-black/60"
        id={props.id}
      >
        {options}
      </select>
    </div>
  );
};

export default SelectList;

const TextArea = (props) => {
    return (
        <div className="flex flex-col font-inter col-span-2 row-span-2 my-2 tracking-wide">
          <label
            className="w-full rounded-md mb-4 text-md font-medium"
            htmlFor={props.id}
          >
            {props.label}{" "}
          </label>
          <textarea
            className="border p-5 rounded-md text-sm mb-6 outline-none "
            id={props.id}
            placeholder={props.placeholder}
            /* onChange={valueChangeHandler}
            onBlur={valueBlurHandler} */
          />
        </div>
      );
}

export default TextArea;
const TextArea = (props) => {
    return (
        <div className="text-md font-medium my-3 tracking-wide">
          <label
            className="w-full border-2 rounded-md p-3 mb-4 outline-none"
            htmlFor={props.id}
          >
            {props.label}{" "}
          </label>
          <textarea
            id={props.id}
            placeholder={props.placeholder}
            /* onChange={valueChangeHandler}
            onBlur={valueBlurHandler} */
          />
        </div>
      );
}

export default TextArea;
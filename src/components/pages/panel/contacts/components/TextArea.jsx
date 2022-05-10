import { useState, useEffect } from "react";


const TextArea = (props) => {
    return (
      /*  ================ Here is the problem =================== */
        <div className="flex flex-col font-inter col-span-2 row-span-2 my-2 tracking-wide bg-slate-400 ">
          <label
            className="w-full rounded-md mb-4 text-md font-medium"
            htmlFor={props.id}
          >
            {props.label}{" "}
          </label>
          <textarea
            className="border-2 p-5 rounded-md text-md outline-none "
            id={props.id}
            placeholder={props.placeholder}
            /* onChange={valueChangeHandler}
            onBlur={valueBlurHandler} */
          />
        </div>
      );
}

export default TextArea;
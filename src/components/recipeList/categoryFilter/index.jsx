import { Fragment, useState } from "react";
import { icons } from "../../../services/utils/icons";

function CategoryFilter({ name, checkHandler, id }) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <ul className="my-3">
        <li className="flex gap-2">
          <div>
            <input
              type="checkbox"
              name="category"
              id={id}
              className="w-6 h-6 absolute opacity-0 cursor-pointer"
              onClick={() => checkHandler(name)}
              onChange={() => setChecked((prev) => !prev)}
            />
            <label htmlFor={id} className="flex ">
              <span className="w-5 h-5 md:w-6 md:h-6 rounded-[50%] border-2 border-solid border-gray-400 "></span>
              {checked && (
                <span className="custom-checkbox absolute cursor-pointer">
                  {icons.checked()}
                </span>
              )}
            </label>
          </div>
          <div className="capitalize">{name}</div>
        </li>
      </ul>
    </div>
  );
}

export default CategoryFilter;

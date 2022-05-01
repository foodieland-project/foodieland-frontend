import { useState } from "react";
import { icons } from "../../../../pages/user/utils/icons";

function IngredientCard({ id, text }) {
  const [checked, setChecked] = useState(false);
  const checkedIcon = icons.checked();
  return (
    <div className=" border-b border-gray-300 border-solid flex gap-4 py-6">
      <div className="pt-1 relative">
        <input
          type="checkbox"
          id={`${id}`}
          className="w-6 h-6 absolute opacity-0 cursor-pointer"
          onClick={() => setChecked(!checked)}
        />
        <label htmlFor={`${id}`} className="flex cursor-pointer">
          <span className="w-5 h-5 md:w-6 md:h-6 rounded-[50%] border-2 border-solid border-gray-400 "></span>
          {checked && (
            <span className="custom-checkbox absolute cursor-pointer">
              {checkedIcon}
            </span>
          )}
        </label>
      </div>
      <div className="relative">
        <h4
          className={`${checked ? "text-checked" : null} text-lg font-medium`}
        >
          {text}
        </h4>
      </div>
    </div>
  );
}

export default IngredientCard;

import { icons } from "../../../../Pages/user/utils/icons";

function OptionCard({ id, option, icon, selected, selectHandler }) {
  return (
    <div
      className={`${
        selected && "active"
      } option-selected flex items-center py-3 text-lightBlack text-sm lg:text-base font-inter pl-4 lg:pl-6 cursor-pointer`}
    >
      <span>{icons[icon]()}</span>
      <span className="ml-3 capitalize">{option}</span>
    </div>
  );
}

export default OptionCard;

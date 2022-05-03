import { Link, useLocation } from "react-router-dom";
import { icons } from "../../../../../utils/icons";

function OptionCard({ id, option, icon, selected, selectHandler, route }) {
  const { pathname } = useLocation();
  return (
    <>
      <Link rel="stylesheet" to={`${route}`}>
        <div
          className={`${
            pathname === route && "active"
          } option-selected flex items-center py-3 text-lightBlack text-sm lg:text-base font-inter pl-4 lg:pl-6 cursor-pointer`}
        >
          <span>{icons[icon]()}</span>
          <span className="ml-3 capitalize">{option}</span>
        </div>
      </Link>
    </>
  );
}

export default OptionCard;

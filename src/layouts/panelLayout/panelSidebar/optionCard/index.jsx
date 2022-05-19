import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../../../features/auth/authSlice";
import { icons } from "../../../../services/utils/icons";

function OptionCard({ option, icon, route }) {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    if (route == "/") {
      dispatch(logout());
    }
  };
  return (
    <>
      <NavLink
        to={`${route}`}
        className={
          "option-selected  flex items-center py-3 text-lightBlack text-sm lg:text-base font-inter pl-4 lg:pl-6 cursor-pointer"
        }
        onClick={logoutHandler}
      >
        <span>{icons[icon]()}</span>
        <span className="ml-3 capitalize">{option}</span>
      </NavLink>
    </>
  );
}

export default OptionCard;

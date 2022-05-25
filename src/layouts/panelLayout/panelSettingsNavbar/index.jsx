import { icons } from "../../../services/utils/icons";
import { NavLink } from "react-router-dom";
import "./index.css";

const PanelSettingsNavbar = () => {
  return (
    <>
      <nav className="border-b-2 border-slate-300 py-3 h-12">
        <ul className="flex justify-start">
          <NavLink
            to="account"
            className={`nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
          >
            <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
            <p className="text-sm sm:text-base">ACCOUNT</p>
          </NavLink>
          <NavLink
            to="security"
            className={`nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
          >
            <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
            <p className="text-sm sm:text-base">SECURITY</p>
          </NavLink>
          <NavLink
            to="info"
            className={`nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
          >
            <span className="mr-2 fill-slate-800">{icons.info()}</span>{" "}
            <p className="text-sm sm:text-base">INFO</p>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default PanelSettingsNavbar;

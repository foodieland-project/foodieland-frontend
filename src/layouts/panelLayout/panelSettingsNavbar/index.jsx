import { icons } from "../../../services/utils/icons";
import "./index.css";

const PanelSettingsNavbar = ({ currentPage, pageHandler }) => {
  return (
    <>
      <nav className="border-b-2 border-slate-300 py-3 h-12">
        <ul className="flex justify-start">
          <li
            className={`${
              currentPage === "account" && "active"
            } nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => pageHandler("account")}
          >
            <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
            <p className="text-sm sm:text-base">ACCOUNT</p>
          </li>
          <li
            className={`${
              currentPage === "security" && "active"
            } nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => pageHandler("security")}
          >
            <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
            <p className="text-sm sm:text-base">SECURITY</p>
          </li>
          <li
            className={`${
              currentPage === "info" && "active"
            } nav__links  mx-4 sm:mx-8 cursor-pointer flex items-center`}
            onClick={() => pageHandler("info")}
          >
            <span className="mr-2 fill-slate-800">{icons.info()}</span>{" "}
            <p className="text-sm sm:text-base">INFO</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PanelSettingsNavbar;

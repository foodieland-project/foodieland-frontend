import { icons } from "../../../../utils/icons";
import styles from "./index.module.css";

const listClasses = `${styles["nav__links"]} mx-8 cursor-pointer flex items-center`;

const PanelOptionNavbar = (props) => {
  return (
    <main className="w-5/6 mx-5 my-3 h-5/6 bg-white shadow-xl ">
      <nav className="border-b-2 border-slate-300 py-3">
        <ul className="flex justify-start">
          <li className={listClasses}>
            <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
            <p>ACCOUNT</p>
          </li>
          <li className={listClasses}>
            <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
            <p>SECURITY</p>
          </li>
          <li className={listClasses}>
            <span className="mr-2 fill-slate-800">{icons.info()}</span>{" "}
            <p>INFO</p>
          </li>
        </ul>
      </nav>
      <section></section>
    </main>
  );
};

export default PanelOptionNavbar;

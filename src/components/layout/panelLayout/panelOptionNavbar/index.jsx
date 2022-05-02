import { icons } from "../../../pages/user/utils/icons";

const PanelNav = (props) => {
  return (
    <main className="w-5/6 mx-5 my-3 h-5/6 bg-white shadow-xl ">
      <nav>
        <ul className="flex justify-start py-3 border-b-2 border-slate-300">
          <li className="mx-8 cursor-pointer flex items-center">
            <span className="mr-2 fill-slate-800 ">{icons.search()}</span>{" "}
            <p>ACCOUNT</p>
          </li>
          <li className="mx-8 cursor-pointer flex items-center">
            <span className="mr-2 fill-slate-800 ">{icons.security()}</span>{" "}
            <p>SECURITY</p>
          </li>
          <li className="mx-8 cursor-pointer flex items-center">
            <span className="mr-2 fill-slate-800 ">{icons.info()}</span>{" "}
            <p>INFO</p>
          </li>
        </ul>
      </nav>
      <section></section>
    </main>
  );
};

export default PanelNav;

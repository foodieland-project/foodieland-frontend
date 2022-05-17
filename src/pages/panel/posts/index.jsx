import { NavLink, Outlet } from "react-router-dom";
import PanelLayout from "../../../layouts/panelLayout";
import { icons } from "../../../services/utils/icons";
import "./index.css";

const Posts = () => {
  return (
    <PanelLayout>
      <>
        <nav className="border-b-2 border-slate-300 py-3">
          <ul className="flex justify-start">
            <NavLink
              to="recipe"
              className={`nav__links mx-8 cursor-pointer flex items-center`}
            >
              <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
              <p>Recipe</p>
            </NavLink>
            <NavLink
              to="article"
              className={`nav__links mx-8 cursor-pointer flex items-center`}
            >
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </NavLink>
          </ul>
        </nav>
        <section className="p-[10px] font-inter">
          <Outlet />
        </section>
      </>
    </PanelLayout>
  );
};

export default Posts;

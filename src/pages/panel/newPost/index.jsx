import { icons } from "../../../services/utils/icons";
import PanelLayout from "../../../layouts/panelLayout";
import "./new-post.css";
import { NavLink, Outlet } from "react-router-dom";

const NewPost = () => {
  return (
    <PanelLayout>
      <>
        <nav className="border-b-2 border-slate-300 py-3 h-12">
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
              className={`nav__links  mx-8 cursor-pointer flex items-center`}
            >
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </NavLink>
          </ul>
        </nav>
        <section className="font-inter">
          <Outlet />
        </section>
      </>
    </PanelLayout>
  );
};

export default NewPost;

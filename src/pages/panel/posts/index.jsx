import { useState } from "react";
import ArticleDashboardList from "../../../components/articleDashboardList";
import PostDashboardList from "../../../components/postDashboardList";
import PanelLayout from "../../../layouts/panelLayout";
import { icons } from "../../../services/utils/icons";
import "./index.css";

const Posts = () => {
  const [currentPage, setCurrentPage] = useState("recipe");
  function pageHandler(page) {
    setCurrentPage(page);
  }
  return (
    <PanelLayout>
      <>
        <nav className="border-b-2 border-slate-300 py-3 h-12">
          <ul className="flex justify-start">
            <li
              className={`${
                currentPage === "recipe" && "active"
              } nav__links mx-8 cursor-pointer flex items-center`}
              onClick={() => pageHandler("recipe")}
            >
              <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
              <p>Recipe</p>
            </li>
            <li
              className={`${
                currentPage === "article" && "active"
              } nav__links mx-8 cursor-pointer flex items-center`}
              onClick={() => pageHandler("article")}
            >
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </li>
          </ul>
        </nav>
        <section className="p-[10px] font-inter">
          {currentPage === "recipe" && <PostDashboardList />}
          {currentPage === "article" && <ArticleDashboardList />}
        </section>
      </>
    </PanelLayout>
  );
};

export default Posts;

import { icons } from "../../../services/utils/icons";
import PanelLayout from "../../../layouts/panelLayout";
import "./new-post.css";
import NewRecipeForm from "../../../components/newRecipeForm";
import NewArticleForm from "../../../components/newArticleForm";
import { useState } from "react";

const NewPost = () => {
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
              } nav__links  mx-8 cursor-pointer flex items-center`}
              onClick={() => pageHandler("article")}
            >
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </li>
          </ul>
        </nav>
        <section className="font-inter">
          {currentPage === "recipe" && <NewRecipeForm />}
          {currentPage === "article" && <NewArticleForm />}
        </section>
      </>
    </PanelLayout>
  );
};

export default NewPost;

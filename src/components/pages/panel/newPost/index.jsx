import React, { useState } from "react";
import { icons } from "../../../../utils/icons";
import NewArticleForm from "../../../basicComponents/newArticleForm";
import NewRecipeForm from "../../../basicComponents/newRecipeForm";
import PanelLayout from "../../../layout/panelLayout";
import "./new-post.css";

const NewPost = () => {
  const [selectRecipe, setSelectRecipe] = useState(true);
  const [selectArticle, setSelectArticle] = useState(false);

  function selectRecipeHandler() {
    setSelectArticle(false);
    setSelectRecipe(true);
  }
  function selectArticleHandler() {
    setSelectRecipe(false);
    setSelectArticle(true);
  }
  return (
    <PanelLayout>
      <>
        <nav className="border-b-2 border-slate-300 py-3">
          <ul className="flex justify-start">
            <li
              className={`nav__links ${
                selectRecipe && "active"
              } mx-8 cursor-pointer flex items-center`}
              onClick={selectRecipeHandler}
            >
              <span className="mr-2 fill-slate-800">{icons.search()}</span>{" "}
              <p>Recipe</p>
            </li>
            <li
              className={`nav__links ${
                selectArticle && "active"
              }  mx-8 cursor-pointer flex items-center`}
              onClick={selectArticleHandler}
            >
              <span className="mr-2 fill-slate-800">{icons.security()}</span>{" "}
              <p>Article</p>
            </li>
          </ul>
        </nav>
        <section className="font-inter">
          {selectRecipe && <NewRecipeForm />}
          {selectArticle && <NewArticleForm />}
        </section>
      </>
    </PanelLayout>
  );
};

export default NewPost;

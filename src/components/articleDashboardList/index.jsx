import { useState } from "react";
import { useSelector } from "react-redux";
import { icons } from "../../services/utils/icons";
import ArticleItem from "./articleItem";
import ArticleListPagination from "./articleListPagination";

function ArticleDashboardList() {
  const articleList = useSelector((state) => state.articles.articles);
  const [articles, setArticles] = useState(articleList);
  const [articlesPerPage, setArticlesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex flex-col xl:flex-row xl:justify-between  text-[14px]  items-center m-[10px]">
        {/* <Search setValueSearch={setValueSearch} /> */}
        <ArticleListPagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="text-[14px]">
        <div className="flex flex-row items-center text-white bg-mainBlue border-[1px] h-[30px] p-[20px] rounded-md ">
          <p className="w-[100%] sm:w-[80%] md:[40%] text-center ">title</p>
          <p className="md:w-[40%] text-center md:block hidden">upload date</p>
          <p className="w-[20%] text-center sm:block hidden">author</p>
        </div>
        {currentArticles.map(({ id, title, created_date, author }) => (
          <ArticleItem
            key={id}
            id={id}
            title={title}
            createdDate={created_date}
            author={author}
          />
        ))}
      </div>
    </>
  );
}

export default ArticleDashboardList;

import { useState } from "react";
import { useSelector } from "react-redux";
import ArticleItem from "./articleItem";
import ArticleListPagination from "./articleListPagination";
import ArticleSearchBox from "./articleSearchBox";

function ArticleDashboardList() {
  const articleList = useSelector((state) => state.articles.articles);
  const [articles, setArticles] = useState(articleList);
  const [articlesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const searchHandler = (event) => {
    let keyword = event.target.value;
    let data = articleList.filter((item) => {
      return item.title.toLowerCase().includes(keyword);
    });
    setArticles(data);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row xl:justify-between  text-[14px]  items-center m-[10px]">
        <ArticleSearchBox searchHandler={searchHandler} />
        <ArticleListPagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
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

import { icons } from "../../../services/utils/icons";

function ArticleListPagination({
  articlesPerPage,
  totalArticles,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="w-full h-20   flex justify-end items-center  mt-3">
      <ul className="xl:w-1/2 w-full h-1/2 bg-white flex  items-center justify-center  lg:justify-end xl:justify-center ">
        <li
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
          className={`posts-arrow bg-lameBlue text-mainBlue hover:bg-darkBlue transition-all cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]`}
        >
          {icons.arrowLeft()}
        </li>
        <li className="flex items-center mx-1">
          <span>page</span>
        </li>
        <li
          className={`posts-arrow    hover:bg-darkBlue transition-all cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]`}
        >
          {currentPage}
        </li>
        <li className="flex items-center mx-1">
          <span>{`from ${totalPages}`}</span>
        </li>

        <li
          onClick={() =>
            setCurrentPage(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          className={` posts-arrow bg-lameBlue text-mainBlue hover:bg-darkBlue transition-all cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px] `}
        >
          {icons.arrowRight()}
        </li>
      </ul>
    </div>
  );
}

export default ArticleListPagination;

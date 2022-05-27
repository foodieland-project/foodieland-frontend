import { icons } from "../../../services/utils/icons";

function ArticleSearchBox({ searchHandler }) {
  return (
    <>
      <div className="rounded-md border-[1px] border-gray-400 flex justify-start w-[50%]">
        <button className="rounded-md w-[30px] h-[30px] bg-lameBlue hover:bg-darkBlue transition-all font-inter mr-[10px] flex justify-center items-center">
          {icons.search()}
        </button>
        <input
          className="text-left w-[70%] outline-none"
          placeholder="write something"
          onChange={searchHandler}
        />
      </div>
    </>
  );
}

export default ArticleSearchBox;

import { getDate } from "../../carousel/carouselCard";

function ArticleItem({ title, createdDate, author, id }) {
  const date = getDate(createdDate);

  return (
    <div className="flex flex-row justify-between flex-1 border-darkPurple border-[1px] h-[30px] p-[20px] rounded-md items-center my-1">
      <p className="w-[100%] sm:w-[80%] md:[40%] text-center ">{title}</p>
      <p className="md:w-[40%] text-center md:block hidden">{date}</p>
      <p className="sm:w-[20%] md:w-[20%] text-center sm:block hidden">
        {author}
      </p>
      {/* <p className="w-[10%] text-center xl:block hidden">{likes}</p>
      <p className="w-[10%] text-center xl:block hidden">{comments}</p> */}
    </div>
  );
}

export default ArticleItem;

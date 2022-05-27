import { Link } from "react-router-dom";
import { getDate } from "../../../carousel/carouselCard";
import "./blog-card.css";

function BlogCard({
  id,
  img,
  title,
  description,
  author,
  profile,
  createdDate,
}) {
  const date = getDate(createdDate);
  return (
    <article className="flex flex-col md:flex-row mt-8 gap-4">
      <div className=" basis-[35%] ">
        <Link to={`/blogPost/${id}`}>
          <img
            src={`${img}`}
            alt="food"
            className="w-full h-full rounded-[15px] object-cover"
          />
        </Link>
      </div>
      <div className="basis-[65%] relative">
        <div className="text-center md:text-left">
          <Link to={`/blogPost/${id}`}>
            <h4 className="text-xl xl:text-2xl font-bold ">{title}</h4>
          </Link>
          <p className="text-secondary mt-3 md:mt-2 text-xs xl:text-base article-description-paragraph">
            {description}
          </p>

          <div className="flex items-center justify-center md:justify-start mt-4 md:mt-0 absolute bottom-2">
            <div className="flex items-center   ">
              <img
                src={`${profile}`}
                alt=""
                className="w-8 h-8  rounded-[50%]"
              />

              <p className=" m-[2px] ml-2 font-semibold text-sm  ">{author}</p>
            </div>
            <p className="ml-6 text-gray-500 text-xs text-center ">{date} </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;

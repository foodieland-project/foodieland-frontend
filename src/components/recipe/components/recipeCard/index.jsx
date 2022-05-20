import { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../../services/utils/icons";

const RecipeCard = ({ title, img, category, id }) => {
  const [like, setLike] = useState(true);
  return (
    <div
      className="basis-[80%] sm:basis-[65%] md:basis-[45%] lg:basis-[40%] xl:basis-[30%] flex flex-col justify-start items-center
    bg-gradient-to-b from-white to-blue-50 rounded-3xl p-[16px] font-inter relative"
    >
      <Link to={`/recipes/${id}`}>
        <div className="w-full">
          <img className="w-full rounded-3xl mb-6" src={img} alt="" />
        </div>
      </Link>
      <div className="w-[48px] h-[48px] bg-white rounded-full flex justify-center items-center absolute top-[32px] right-[36px]">
        <span
          onClick={() => setLike((prev) => !prev)}
          className="w-[20.25px] h-[18px]"
        >
          {like ? icons.whiteHeat() : icons.redHeat()}
        </span>
      </div>
      <Link to={`/recipes/${id}`}>
        <p className="font-semibold text-xl md:text-2xl mb-6">{title}</p>
      </Link>
      <div className="flex justify-start w-full">
        <div className="flex flex-row-reverse pr-7">
          <p className="font-medium text-sm">30 Minutes</p>
          <span className="w-[18px] h-[18px] mr-3">{icons.timer()}</span>
        </div>
        <div className="flex flex-row-reverse">
          <p className="font-medium text-sm">{category}</p>
          <span className="w-[18px] h-[18px] flex flex-row mr-3">
            {icons.fork()}
            {icons.knife()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

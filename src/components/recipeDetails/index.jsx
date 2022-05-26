import RecipeVideoCard from "../recipeVideoCard";
import NutritionInfoCard from "./components/nutritionInfoCard";
import { icons } from "../../services/utils/icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function RecipeDetails() {
  const { recipes } = useSelector((state) => state.recipes);
  const { timer, fork, knife, printer, share } = icons;
  const { id } = useParams();

  const {
    title,
    video,
    description,
    cook_time: cookTime,
    prep_time: prepTime,
    nutrition,
    chef,
    uploadDate,
    category,
    chefImg,
  } = recipes.filter((item) => item.id === id)[0];

  const date = new Date(uploadDate);
  const dateString = `${date.getDay()} ${
    month[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <section>
      <div className="w-11/12 xl:w-full mx-auto mt-20 flex flex-wrap gap-4 font-inter">
        <div className="basis-full   lg:basis-[66%] ">
          <div className="text-center lg:text-left">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl ">
              {title}
            </h1>
          </div>
          <div className="flex justify-end lg:justify-start flex-wrap gap-6 sm:gap-2 md:gap-4 my-12">
            <div className="basis-[44%] sm:basis-[23%] flex border-r border-gray-300 border-solid ">
              <div>
                <img
                  src={`${chefImg}`}
                  alt="chief"
                  className="mx-auto w-10 h-10 object-cover rounded-[50%]"
                />
              </div>
              <div className=" ml-2 ">
                <span className="font-bold block text-xs md:text-sm xl:text-base">
                  {chef}
                </span>
                <span className="carousel-gray-text-color text-2xs xl:text-xs  font-medium">
                  {dateString}
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center sm:border-r border-gray-300 border-solid">
              <span>{timer()}</span>
              <div className="ml-2">
                <span className="font-medium text-xs block">PREP TIME</span>
                <span className="text-sm font-medium text-secondary ">
                  {prepTime}
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center border-r border-gray-300 border-solid pl-3 sm:pl-0">
              <span>{timer()}</span>
              <div className="ml-2">
                <span className="font-medium text-xs block">COOK TIME</span>
                <span className="text-sm font-medium text-secondary ">
                  {cookTime}
                </span>
              </div>
            </div>
            <div className="basis-[44%] sm:basis-[23%] flex items-center text-sm md:text-base">
              <span className="inline-block ">{fork()}</span>
              <span className="inline-block pr-2">{knife()}</span>
              {category}
            </div>
          </div>
          <RecipeVideoCard videoUrl={video} />
        </div>
        <div className="basis-full lg:basis-[30%] flex flex-col justify-between">
          <div className="flex justify-center lg:justify-end py-8">
            <div className="text-center">
              <div className="bg-lameBlue rounded-[50%] mb-2 p-7 hover:bg-darkBlue transition-all cursor-pointer">
                <span>{printer()}</span>
              </div>
              <span className="text-xs font-medium">PRINT</span>
            </div>
            <div className="text-center ml-4">
              <div className="bg-lameBlue rounded-[50%] mb-2 p-7 hover:bg-darkBlue transition-all cursor-pointer">
                <span>{share()}</span>
              </div>
              <span className="text-xs font-medium">SHARE</span>
            </div>
          </div>
          <NutritionInfoCard nutrition={nutrition} />
        </div>
        <div className="mt-10">
          <p className="text-secondary text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeDetails;

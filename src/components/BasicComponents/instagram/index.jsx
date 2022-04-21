import { icons } from "../../../utils/icons";
import InstagramCard from "./instagramCard";

function FoodielandInstagram() {
  const instagramIcon = icons.whiteInstagram();

  const foodielandInstagramData = [
    {
      id: 1,
      imageUrl: "./images/instagram-foods/food-9.png",
      caption:
        "The vegetables dishes need to have certain vitamin for those people",
      date: "September 13",
    },
    {
      id: 2,
      imageUrl: "./images/instagram-foods/food-10.png",
      caption:
        "Sweet food can bring someon into happiness as long as they don’t eat to much",
      date: "September 19",
    },
    {
      id: 3,
      imageUrl: "./images/instagram-foods/food-11.png",
      caption:
        " What are you doing before start cooking? prepare the tools or ingredients?",
      date: "September 17",
    },
    {
      id: 4,
      imageUrl: "./images/instagram-foods/food-12.png",
      caption:
        "Steak never be wrong, it’s suitable for you who want romantic dinner",
      date: "September 15",
    },
  ];
  return (
    <section className="my-12 md:my-20 font-inter">
      <div className="bg-gradient-blueSky">
        <div className="text-center">
          <div className="mb-5 md:mb-10">
            <h2 className="font-semibold text-3xl md:text-5xl">
              Check out @foodieland on Instagram
            </h2>
          </div>
          <div>
            <p className="w-2/3 text-secondary mx-auto text-xs md:text-base">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 xl:gap-8 mt-10 md:mt-16 justify-center w-4/5     md:w-8/12 lg:w-11/12 mx-auto">
          {foodielandInstagramData.map(({ id, imageUrl, caption, date }) => (
            <InstagramCard
              key={id}
              imageUrl={imageUrl}
              caption={caption}
              date={date}
            />
          ))}
        </div>
        <div className="mt-16 pb-20">
          <button className="text-white bg-black text-xs md:text-base py-4 items-center md:py-5 px-4 md:px-6 mx-auto rounded-2xl flex ">
            <span>Visit Our Instagram</span>
            <span className="ml-4">{instagramIcon}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FoodielandInstagram;

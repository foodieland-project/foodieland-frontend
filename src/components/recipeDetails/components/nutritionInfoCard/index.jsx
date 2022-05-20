import NutritionItem from "./nutritionItem";

function NutritionInfoCard({ nutrition }) {
  const [...nutritionName] = Object.keys(nutrition);
  return (
    <div className="h-[450px] xl:h-[600px] bg-lameBlue rounded-2xl p-6 ">
      <h4 className="font-semibold text-xl xl:text-2xl mb-3 xl:mb-6 mt-2">
        Nutrition Information
      </h4>
      <div>
        {nutritionName.map((name) => (
          <NutritionItem name={name} weight={nutrition[name]} />
        ))}
      </div>
      <div>
        <p className="text-secondary text-sm  xl:text-base text-center mt-10 xl:mt-28 mb-6">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.{" "}
        </p>
      </div>
    </div>
  );
}

export default NutritionInfoCard;

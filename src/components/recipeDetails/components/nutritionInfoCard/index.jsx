import NutritionItem from "./nutrionItem";


function NutritionInfoCard({ nutritionInfo }) {
  return (
    <div className="h-[450px] xl:h-[600px] bg-lameBlue rounded-2xl p-6 ">
      <h4 className="font-semibold text-xl xl:text-2xl mb-3 xl:mb-6 mt-2">
        Nutrition Information
      </h4>
      <div>
        {nutritionInfo.map(({ id, name, weight }) => (
          <NutritionItem key={id} name={name} weight={weight} />
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

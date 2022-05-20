function NutritionItem({ name, weight }) {
  return (
    <div className="flex justify-between  border-b border-gray-300 border-solid               py-3 xl:py-4">
      <span className="text-secondary font-medium text-base xl:text-lg ">
        {name}
      </span>
      <span className="text-base xl:text-lg font-medium">{weight}</span>
    </div>
  );
}

export default NutritionItem;

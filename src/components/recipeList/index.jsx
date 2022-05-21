function RecipeList() {
  return (
    <div className="flex gap-6 justify-center w-[70%] mx-auto xl:justify-between items-center md:w-full flex-wrap">
      {recipes.slice(8, 16).map(({ img, title, category, id, cook_time }) => (
        <MoreRecipeCard
          key={id}
          id={id}
          img={img}
          title={title}
          category={category}
          cookTime={cook_time}
        />
      ))}
    </div>
  );
}

export default RecipeList;

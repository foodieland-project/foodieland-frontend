import Category from "./Category";
function Categories() {
  const categoriesData = [
    {
      id: 1,
      name: "Breakfast",
      imageUrl: "./images/categories/breakfast.png",
      bgColor: "bg-gradient-grey",
    },
    {
      id: 2,
      name: "Vegan",
      imageUrl: "./images/categories/vegan.png",
      bgColor: "bg-gradient-green",
    },
    {
      id: 3,
      name: "Meat",
      imageUrl: "./images/categories/meat.png",
      bgColor: "bg-gradient-red",
    },
    {
      id: 4,
      name: "Dessert",
      imageUrl: "./images/categories/dessert.png",
      bgColor: "bg-gradient-yellow",
    },
    {
      id: 5,
      name: "Lunch",
      imageUrl: "./images/categories/lunch.png",
      bgColor: "bg-gradient-white",
    },
    {
      id: 6,
      name: "Chocolate",
      imageUrl: "./images/categories/chocolate.png",
      bgColor: "bg-gradient-brown",
    },
  ];
  return (
    <section>
      <div className="w-11/12 md:w-9/12 xl:w-full font-inter mx-auto my-20 lg:my-40">
        <div className="flex flex-col justify-center text-center md:flex-row md:justify-around lg:justify-between mb-20  ">
          <div className="mb-8 md:mb-0">
            <h1 className="font-semibold text-5xl">Categories</h1>
          </div>
          <div>
            <button className="bg-lameBlue font-semibold text-base p-2 rounded-2xl w-48 h-14">
              View All Categories
            </button>
          </div>
        </div>
        <div className="flex justify-center  lg:justify-between gap-4 xl:gap-8  flex-wrap">
          {categoriesData.map(({ id, name, imageUrl, bgColor }) => (
            <Category
              key={id}
              name={name}
              imageUrl={imageUrl}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

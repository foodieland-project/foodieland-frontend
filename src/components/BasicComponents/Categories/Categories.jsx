import "./categories.css";
function Categories() {
  const categoriesData = [
    {
      id: 1,
      name: "Breakfast",
      imageUrl: "./images/categories/breakfast.png",
    },
    {
      id: 2,
      name: "Vegan",
      imageUrl: "./images/categories/vegan.png",
    },
    {
      id: 3,
      name: "Meat",
      imageUrl: "./images/categories/meat.png",
    },
    {
      id: 4,
      name: "Dessert",
      imageUrl: "./images/categories/dessert.png",
    },
    {
      id: 5,
      name: "Lunch",
      imageUrl: "./images/categories/lunch.png",
    },
    {
      id: 6,
      name: "Chocolate",
      imageUrl: "./images/categories/chocolate.png",
    },
  ];
  return (
    <section>
      <div className="xl:w-[1280px] w-4/5 font-inter mx-auto my-40">
        <div className="flex justify-between mb-20  ">
          <div>
            <h1 className="font-semibold text-5xl">Categories</h1>
          </div>
          <div>
            <button className="bg-lameBlue font-semibold text-base p-2 rounded-2xl w-48 h-14">
              View All Categories
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-10  ">
          {categoriesData.map(({ id, name, imageUrl }) => (
            <div className="w-[180px] h-[200px] rounded-3xl overflow-hidden">
              <div>
                <img src={`${imageUrl}`} alt="breakfast" className="mx-auto" />
              </div>
              <div className="category-name text-center font-semibold text-lg p-9">
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;

import "./category.css";

function Category({ imageUrl, name, bgColor }) {
  return (
    <div className="category-item lg:basis-1/6 h-[160px] md:h-[200px] rounded-3xl overflow-hidden my-4">
      <div>
        <img
          src={`${imageUrl}`}
          alt="breakfast"
          className="mx-auto w-[80px] md:w-[100px]"
        />
      </div>
      <div className={`${bgColor}   text-center font-semibold text-lg py-9 `}>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default Category;

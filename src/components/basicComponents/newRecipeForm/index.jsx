import { useState } from "react";

function NewRecipeForm() {
  const [ingredientList, setIngredientList] = useState([]);

  function ingredientHandler(event) {
    let array = [];
    for (let i = 1; i <= event.target.value; i++) {
      array[i] = i;
    }
    setIngredientList(array);
  }

  return (
    <div className="p-4">
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="title" className="pb-2 pl-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            className={` md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6 `}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="pb-2 pl-2">
            Description
          </label>
          <textarea className="p-4 border border-gray-500  rounded-2xl h-32" />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="pb-2 pl-2">
            Upload Cooking Video
          </label>
          <input type="file" className="pl-2" />
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center ml-2">
            <h4>Ingredients</h4>
          </div>
          <div className="mt-2">
            <input
              type="number"
              name="title"
              className=" w-1/4 sm:w-[15%] border border-gray-500  rounded-2xl py-2 px-6"
              defaultValue={0}
              max={10}
              min={0}
              onChange={ingredientHandler}
            />
          </div>
          {ingredientList &&
            ingredientList.map((num) => (
              <div className="mt-2">
                <label htmlFor="title" className="pb-2 px-2">{`${num}.`}</label>
                <input
                  type="text"
                  name="title"
                  className="md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6"
                />
              </div>
            ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-darkPurple text-white py-2 px-6 rounded-xl cursor-pointer mr-2 w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecipeForm;

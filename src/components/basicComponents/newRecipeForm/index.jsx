import { icons } from "../../../utils/icons";

function NewRecipeForm() {
  return (
    <div className="p-6">
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="title" className="pb-2 pl-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            className=" md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6"
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
            <span className="w-8 ml-4 cursor-pointer">{icons.plus()}</span>
          </div>
          <div className="mt-2">
            <label htmlFor="title" className="pb-2 px-2">
              1.
            </label>
            <input
              type="text"
              name="title"
              className="md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewRecipeForm;

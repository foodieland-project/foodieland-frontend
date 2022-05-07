import TextEditor from "./textEditor";

function NewArticleForm() {
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
          <TextEditor />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="pb-2 pl-2">
              Upload Cooking image
            </label>
            <input type="file" className="pl-2" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="" className="pb-2 pl-2">
              Upload date of publication
            </label>
            <input type="date" className="pl-2" />
          </div>
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

export default NewArticleForm;

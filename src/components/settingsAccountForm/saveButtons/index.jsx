import Spinner from "../../login/components/spinner";

function SaveButtons({ isLoading }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-12">
      <div>
        <button
          type="submit"
          className="bg-mainBlue w-full relative md:w-40   hover:bg-darkerBlue transition-all rounded-md text-white py-2 px-4 cursor-pointer"
        >
          {isLoading ? <Spinner /> : "SAVE CHANGES"}
        </button>
      </div>
      <div className="md:ml-4">
        <button className="w-full border-2 border-gray-300 hover:bg-gray-300 transition-all  rounded-md py-1.5 px-4  text-secondary">
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default SaveButtons;
